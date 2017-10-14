import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "target";
export const hosts = ["www.target.com"];
export const scrape = async page => {
  const title = await getText(".title-product", page);
  const price = await getText(".price .h-text-lowercase", page);
  const image = await getSrc("img.single-image", page);
  const description = await getText(
    "#tab-content-details > div:nth-child(2)",
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
