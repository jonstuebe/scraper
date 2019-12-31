import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "amazon";
export const hosts = ["www.amazon.com", "smile.amazon.com"];
export const scrape = async page => {
  const title = await getText("#title", page);
  const price = await getText("#priceblock_ourprice", page);
  const dealPrice = await getText("#priceblock_dealprice", page);
  const image = await getSrc("img.a-dynamic-image", page);
  const description = await getText("#featurebullets_feature_div", page);

  const data = {
    title,
    price: dealPrice ? dealPrice : price,
    image,
    description
  };

  return data;
};
