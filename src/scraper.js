import puppeteer from "puppeteer";
import urlParse from "url-parse";
import { map, includes } from "lodash";

import sites, { scrape as defaultScrape } from "./sites";

export const scrape = async (url, site) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle" });

  let data;
  if (!site) {
    data = await defaultScrape(page);
  } else {
    data = await site.scrape(page);
  }
  await browser.close();
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

export default async url => {
  const site = await detectSite(url);
  return site ? await scrape(url, site) : await scrape(url);
};
