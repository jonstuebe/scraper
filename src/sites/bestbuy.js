import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "bestbuy";
export const hosts = ["www.bestbuy.com"];
export const scrape = async page => {
  const title = await getText("#sku-title h1", page);
  const price = await getText(".pb-hero-price.pb-purchase-price", page);
  const image = await getSrc(".primary-image", page, true);
  const description = await getText("#long-description", page);

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};
