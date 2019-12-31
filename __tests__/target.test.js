const puppeteer = require("puppeteer");

const Scraper = require("../lib");

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch();
});
afterAll(async () => {
  await browser.close();
});

describe("tests various target products", () => {
  it("returns data for a single product", async () => {
    const data = await Scraper.scrapeAndDetect(
      "https://www.target.com/p/corinna-wood-media-stand-with-metal-frame-brown-threshold-8482/-/A-54579149",
      browser
    );

    expect(data).toEqual({
      description:
        "The Corinna Wood Media Stand With Metal Frame from Threshold™ offers a stylish way to display your TV and store your entertainment equipment. Fusing fashion and function, this wood-finish TV stand can accommodate up to a 50-inch flat screen TV, and it offers plenty of space to store electronics with both open storage shelving and hidden storage space behind drawers with metal pulls. Made with sturdy a metal frame in an elegant black color, this compact TV unit has a spacious rack at the bottom for additional storage and display.",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_ec5b5ecc-f9b0-4dde-8794-af9be54d25f5?wid=588&hei=588&qlt=80&fmt=webp",
      price: "$207.99",
      title: "Corinna Wood Media Stand with Metal Frame Brown - Threshold™"
    });
  }, 30000);

  it("loop through multiple product's and share the same puppeteer session", async () => {
    let products = [
      "https://www.target.com/p/corinna-angle-leg-side-table-wood-threshold-8482/-/A-53496420",
      "https://www.target.com/p/glasgow-metal-end-table-black-project-62-8482/-/A-52343433"
    ];

    let productsData = [];
    for (const product of products) {
      const productData = await Scraper.scrapeAndDetect(product, browser);
      productsData.push(productData);
    }

    expect(productsData).toEqual([
      {
        title: "Corinna Angle Leg Side Table Wood - Threshold™",
        price: "$69.99",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_c714d7d8-3f2f-41c9-9ef2-8a2510d727d8?wid=588&hei=588&qlt=80&fmt=webp",
        description:
          "Overall Width:19.25 inchesOverall Height: 24.25 inches (including floor leveler)Overall Depth: 15.75 inches (including handle)Width of top box: 17.5 inchesDepth of top box: 15 inchesDistance from floor to top of top box: 24 inchesDistance from floor to bottom of top box: 18.3 inchesDistance from stretchers to bottom of top box: 11.6 inchesDistance from floor to stretchers: 5.9 inchesDistance between right side frame to left side frame: 15.5 inchesDistance between front side frame to back side frame: 10.7 inchesOverall Width of drawer front: 16 inchesOverall Height of drawer front: 4.25 inchesDepth of drawer inside: 11.2 inchesWidth of drawer inside: 14.4 inchesInterior height of drawer side: 2.7 inchesHeight of drawer side: 3.375 inches"
      },
      {
        title: "Glasgow Metal End Table Black - Project 62™",
        price: "$59.99",
        image:
          "https://target.scene7.com/is/image/Target/GUEST_4fd7f5cb-f5e4-4416-8155-512514b3e998?wid=588&hei=588&qlt=80&fmt=webp",
        description:
          "Bring clean lines and modern style into your space with the Metal End Table from Project 62™. This industrial-style square end table brings just the right amount of urban vibes. Top with a table lamp and use the second shelf to store books, records, remotes or coasters to keep your space clutter-free.1962 was a big year. Modernist design hit its peak and moved into homes across the country. And in Minnesota, Target was born - with the revolutionary idea to celebrate design for all. Project 62 embodies this legacy with a collection of modern pieces made for everyday living.Overall Depth: 20 inchesOverall Width: 20 inchesOverall Height: 24 inchesDistance between counter top and shelf: 6 inchesDistance underneath shelf to floor: 16.5 inches"
      }
    ]);
  }, 100000);
});
