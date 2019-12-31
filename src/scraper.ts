import puppeteer, { Browser } from "puppeteer";
import urlParse from "url-parse";
import { map, includes } from "lodash";

import sites, { scrape as defaultScrape } from "./sites";

export const scrape = async (
  url: string,
  site: any,
  browser?: Browser,
  device?: any
) => {
  let globalBrowser = browser ? true : false;
  browser = browser ? browser : await puppeteer.launch();
  const page = await browser.newPage();
  if (device) {
    await page.emulate(device);
  }
  await page.goto(url, { waitUntil: "networkidle2" });

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

export const detectSite = async (url: string) => {
  const urlData = new urlParse(url as string);
  const sitesArr = map(sites, (site: any) => {
    return site;
  });

  let site;
  for (let i = 0; i < sitesArr.length; i++) {
    if (includes(sitesArr[i].hosts, urlData.host)) {
      site = sitesArr[i];
    }
  }

  return site;
};

export default async function scrapeAndDetect(
  url: string,
  browser?: Browser,
  device?: any
) {
  const site = await detectSite(url);
  return site
    ? await scrape(url, site, browser, device)
    : await scrape(url, null, browser, device);
}
