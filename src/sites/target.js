import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "target";
export const hosts = ["www.target.com"];
export const scrape = async page => {
  const title = await getText('[data-test="product-title"]', page);
  const price = await getText('[data-test="product-price"]', page);
  const image = await getSrc('[data-test="carousel-image"] img', page);
  const description = await getText(
    "#specAndDescript:last-child > div > div",
    page
  );

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};
