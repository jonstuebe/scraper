import puppeteer, { Browser } from "puppeteer";
import Scraper from "../src";

let browser: Browser | undefined;
beforeAll(async () => {
  browser = await puppeteer.launch();
});
afterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

describe("tests various target products", () => {
  it("returns data for a single product", async () => {
    const data = await Scraper(
      "https://www.target.com/p/corinna-wood-media-stand-with-metal-frame-brown-threshold-8482/-/A-54579149",
      browser
    );

    expect(data.title).not.toEqual("");
    expect(data.price).not.toEqual("");
    expect(data.image).not.toEqual("");
    expect(data.description).not.toEqual("");
  }, 30000);

  it("loop through multiple product's and share the same puppeteer session", async () => {
    let products = [
      "https://www.target.com/p/corinna-angle-leg-side-table-wood-threshold-8482/-/A-53496420",
      "https://www.target.com/p/glasgow-metal-end-table-black-project-62-8482/-/A-52343433",
    ];

    let productsData = [];
    for (const product of products) {
      const productData = await Scraper(product, browser);
      productsData.push(productData);
    }

    expect(productsData[0].title).not.toEqual("");
    expect(productsData[0].price).not.toEqual("");
    expect(productsData[0].image).not.toEqual("");
    expect(productsData[0].description).not.toEqual("");

    expect(productsData[1].title).not.toEqual("");
    expect(productsData[1].price).not.toEqual("");
    expect(productsData[1].image).not.toEqual("");
    expect(productsData[1].description).not.toEqual("");
  }, 100000);
});
