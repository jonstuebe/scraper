const Scraper = require("../lib");
const yup = require("yup");

test(
  "adding",
  async () => {
    const schema = yup.object().shape({
      title: yup.string().required(),
      price: yup.string().required(),
      image: yup.string().required(),
      description: yup.string().required()
    });

    const data = await Scraper.scrapeAndDetect(
      "https://www.target.com/p/toms-iphone-6-7-leather-case-green-stripes/-/A-52796028"
    );

    await schema.isValid(data).then(result => {
      return expect(result).toBe(true);
    });
  },
  30000
);
