import puppeteer from "puppeteer";
import urlParse from "url-parse";
import { map, includes } from "lodash";

import sites, { scrape as defaultScrape } from "./sites";

export const scrape = async (url, site, browser, device) => {
  let globalBrowser = browser ? true : false;
  browser = globalBrowser ? browser : await puppeteer.launch();
  const page = await browser.newPage();
  if (device) {
    await page.emulate(device);
  }
  await page.goto(url, { waitUntil: "load", timeout: 0 });

  let data;
  if (!site) {
    data = await defaultScrape(page);
  } else {
    data = await site.scrape(page);
  }
  if (!globalBrowser) {
    await browser.close();
  }
  return data;
};

export const detectSite = async url => {
  url = new urlParse(url);
  const sitesArr = map(sites, site => {
    return site;
  });

  let site;
  for (let i = 0; i < sitesArr.length; i++) {
    if (includes(sitesArr[i].hosts, url.host)) {
      site = sitesArr[i];
    }
  }

  return site;
};

export default async (url, browser, device) => {
  const site = await detectSite(url);
  return site
    ? await scrape(url, site, browser, device)
    : await scrape(url, null, browser, device);
};
