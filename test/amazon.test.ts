import Scraper from "../src";

describe("test various amazon product pages", () => {
  it("adding", async () => {
    const data = await Scraper("https://www.amazon.com/dp/B07RXXJ8YD");

    // amazon product pages change to often to match the same data,
    // so instead we're just matching on if there is data or not

    expect(data.title).not.toEqual("");
    expect(data.price).not.toEqual("");
    expect(data.image).not.toEqual("");
    expect(data.description).not.toEqual("");
  }, 30000);
});
