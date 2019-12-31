import { Page } from "puppeteer";
import { stripAndTrim } from "../helpers";

import * as amazon from "./amazon";
import * as target from "./target";
import * as walmart from "./walmart";

interface Data {
  title?: string;
  original_price?: string;
  sale_price?: string;
  price?: string;
  image?: string;
  brand?: string;
  details?: string;
  description?: string;
}

export const scrape = async (page: Page) => {
  let data: Data = {};

  const title = stripAndTrim(
    await page.$eval("#title", (e: any) => e.innerHTML)
  );
  data.title = title;

  return data;
};

export default {
  amazon,
  target,
  walmart,
};
