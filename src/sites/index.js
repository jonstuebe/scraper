import { stripAndTrim } from "../helpers";

export const scrape = async page => {
  let data = {
    title: null,
    original_price: null,
    sale_price: null,
    price: null,
    image: null,
    brand: null,
    details: null,
    description: null
  };

  const title = stripAndTrim(await page.$eval("#title", e => e.innerHTML));
  data.title = title;

  return data;
};

import * as amazon from "./amazon";
import * as bestbuy from "./bestbuy";
import * as target from "./target";
import * as walmart from "./walmart";

export default {
  amazon,
  bestbuy,
  target,
  walmart
};
