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
    "https://www.walmart.com/ip/Acer-CB3-532-C47C-15-6-Chromebook-Chrome-OS-Intel-Celeron-N3060-Dual-Core-Processor-2GB-RAM-16GB-Internal-Storage/54518466?athcpid=54518466&athpgid=athenaItemPage&athcgid=collection&athznid=755771638_collection&athieid=v0&athstid=CS020&athguid=b713d0fa-37c-16f5981e6b23ce&athancid=null&athena=true"
  );

  await schema.isValid(data).then(result => {
    return expect(result).toBe(true);
  });
}, 30000);
