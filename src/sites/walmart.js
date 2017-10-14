import { stripAndTrim, lookupFailure, getText, getSrc } from "../helpers";

export const name = "walmart";
export const hosts = ["www.walmart.com"];
export const scrape = async page => {
  const title = await getText(".prod-ProductTitle", page);
  const price = await getText(".Price .Price-group", page);
  const image = await getSrc(".slider .slider-list img", page);
  const description = await getText(".about-desc", page);

  const data = {
    title,
    price,
    image,
    description
  };

  return data;
};
