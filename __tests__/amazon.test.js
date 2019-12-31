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
    "https://www.amazon.com/dp/B07RXXJ8YD/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B07RXXJ8YD&pd_rd_w=1ReKC&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=uCv8e&pf_rd_r=A83WVRJDESAXE5VP33TZ&pd_rd_r=299c9c17-9559-4aec-98c0-253d832419ac&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYMDZXSTFTOUFJU0gmZW5jcnlwdGVkSWQ9QTA0ODAyODdMUDkyNUhGWjQyOUkmZW5jcnlwdGVkQWRJZD1BMDY3MDg5NkVEWVhGTDUzMlNSVSZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
  );

  await schema.isValid(data).then(result => {
    return expect(result).toBe(true);
  });
}, 30000);

test("adding (with a discounted price)", async () => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required()
  });

  const data = await Scraper.scrapeAndDetect(
    "https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD"
  );

  await schema.isValid(data).then(result => {
    return expect(result).toBe(true);
  });
}, 30000);
