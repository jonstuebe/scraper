const Scraper = require("../lib");

(async () => {
  const site = {
    name: "npm",
    hosts: ["www.npmjs.com"],
    scrape: async page => {
      const name = await Scraper.getText("div.content-column > h1 > a", page);
      const version = await Scraper.getText(
        "div.sidebar > ul:nth-child(2) > li:nth-child(2) > strong",
        page
      );
      const author = await Scraper.getText(
        "div.sidebar > ul:nth-child(2) > li.last-publisher > a > span",
        page
      );

      return {
        name,
        version,
        author
      };
    }
  };

  const data = await Scraper.scrape(
    "https://www.npmjs.com/package/lodash",
    site
  );
  console.log(data);
})();
