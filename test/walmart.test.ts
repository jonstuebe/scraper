import puppeteer, { Browser } from "puppeteer";
import Scraper from "../src";

let browser: Browser | undefined;
beforeAll(async () => {
  const options = process.env.CI
    ? { args: ["--no-sandbox", "--disable-setuid-sandbox"] }
    : {};
  browser = await puppeteer.launch(options);
});
afterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

describe("test walmart product pages", () => {
  it("adding", async () => {
    const data = await Scraper(
      "https://www.walmart.com/ip/Acer-CB3-532-C47C-15-6-Chromebook-Chrome-OS-Intel-Celeron-N3060-Dual-Core-Processor-2GB-RAM-16GB-Internal-Storage/54518466?athcpid=54518466&athpgid=athenaItemPage&athcgid=collection&athznid=755771638_collection&athieid=v0&athstid=CS020&athguid=b713d0fa-37c-16f5981e6b23ce&athancid=null&athena=true",
      browser
    );

    // walmart product pages change to often to match the same data,
    // so instead we're just matching on if there is data or not
    expect(data.title).not.toEqual("");
    expect(data.price).not.toEqual("");
    expect(data.image).not.toEqual("");
    expect(data.description).not.toEqual("");
  }, 30000);
});
