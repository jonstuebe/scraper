const Scraper = require("../lib");
const yup = require("yup");

test("adding", async () => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required()
  });

  const data = await Scraper.scrapeAndDetect(
    "https://www.bestbuy.com/site/apple-airpods-pro-white/5706659.p?skuId=5706659"
  );

  await schema.isValid(data).then(result => {
    return expect(result).toBe(true);
  });
}, 100000);
