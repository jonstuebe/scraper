const Scraper = require("../lib");
const puppeteer = require("puppeteer");

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch();
});
afterAll(async () => {
  await browser.close();
});

describe("test walmart product pages", () => {
  it("adding", async () => {
    const data = await Scraper.scrapeAndDetect(
      "https://www.walmart.com/ip/Acer-CB3-532-C47C-15-6-Chromebook-Chrome-OS-Intel-Celeron-N3060-Dual-Core-Processor-2GB-RAM-16GB-Internal-Storage/54518466?athcpid=54518466&athpgid=athenaItemPage&athcgid=collection&athznid=755771638_collection&athieid=v0&athstid=CS020&athguid=b713d0fa-37c-16f5981e6b23ce&athancid=null&athena=true",
      browser
    );

    expect(data).toEqual({
      description:
        "About Chromebook: Chromebook is a computer for the way the modern world works, with thousands of apps, built-in virus protection and cloud backups. It is secure, fast, up-to-date, versatile and simple.      Built for speed and simplicity: Starts in seconds and stays fast throughout the day.     More up-time between charges: With up to 8 hours* of battery life, you can surf, work or play from anywhere.  (*All Chromebooks come with at least 8 hours of battery life.)     Security from the start: Automatic updates and backups offer protection and peace of mind     Do more with apps: Entertainment or productivity, all your favorite apps are available in the Google Play store.     Designed with you in mind: Hardware from premium manufacturers with innovative and sleek designs.     Set digital ground rules with Family Link: Parents can manage their family's apps and websites, set screen time limits, and even remotely lock devices.     Discover your Chromebook:&nbsp; here   Acer expands upon its already dominant Chromebook position with an affordable 15.6\" HD Chromebook, letting you see more, do more and explore more than ever before. With a 27 percent larger screen area than the 13.3-inch Chromebook and a 24 percent larger screen than a 14-inch Chromebook, more content can be shown with less scrolling, and productivity tools such as Excel are easier to interact with. In short, it's just the right size for you to make this Chromebook your quot;everythingquot; book. The antiglare HD display is designed to minimize the glare resulting in less strain on the eyes, even after long hours of use.     Acer CB3-532-C47C 15.6\" Chromebook:Key Features and Benefits:       15.6\" displayLED-backlit Display    Intel Celeron N3060 Dual-Core processor1.6GHz (with Max Turbo Speed of 2.48GHz)    2GB system memoryGives you options for surfing, video conferencing, documents, basic photo editing and simple computer tasks    16GB internal storageStore up to 10,667 photos, 4,500 songs or 8.4 hours of video and more    12 hours of battery lifeLong-lasting battery life gives you all day to access your photos, videos, music and documents    Intel HD Graphics 400    Weight: 4.3 lbsThin design you can easily take on the road    802.11ac Wireless LANWirelessly connect to a WiFi signal or hotspot with the 802.11ac connection built into your PC   Additional Features:       720 HD webcam with HRD (High Dynamic Range)    Bluetooth 4.2    Standard mini keyboard    2 x USB 3.0 ports, 1 x HDMI out port, 1 x 3.5mm audio out jack    3-cell lithium-ion battery    Dimensions: 15.08\" x 10.08\" x 0.95\"    Color: Black   Software:       Chrome OS   Support and Warranty:       1-year limited hardware warranty    24/7 technical assistance available online or toll-free by phone   What's In The Box:       Power cord and AC adapter    3-cell battery    Quick Start Guide   What is a Chromebook PC?Chromebook PCs are a new type of computer designed to help you get things done faster and easier. Chromebook starts up in seconds, so you can immediately start playing or working. Chromebook looks like a laptop and feels like a laptop, but differs from traditional computers as follows:       Instead of Windows OS or Apple OS, Chromebook PCs run on Chrome OS, an operating system that features multiple layers of security, cloud storage and the most popular Google products built right in.    Chromebook won't load and run traditional PC applications such as Microsoft Office or Skype. However, Chromebook uses Chrome-specific apps for everyday tasks. You'll be able to create documents, listen to music, edit your photos, chat with friends and family and play online games. Plus, you can download many additional apps from the Chrome Web Store. No more buying and installing software Ã¢ÂÂ    thousands of apps are free and feature automatic updates.    Chromebook comes with built-in virus protection, multiple layers of security and verified boot help to keep you safe from viruses and malware.    Your Chromebook will keep your files away from your machine and safe online. Google Drive is built right in, so your files and photos are automatically backed up to the cloud.    Your Chromebook will update itself for free, so you'll always have the latest and greatest version. No need for manual downloads and upgrades.",
      image:
        "https://i5.walmartimages.com/asr/f3077845-8786-4bfa-ba98-482f06af91a2_1.2bdade6ddc986cbd875304164a98aa06.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff",
      price: "$179.00",
      title:
        'Acer CB3-532-C47C 15.6" Chromebook, Chrome OS, Intel Celeron N3060 Dual-Core Processor, 2GB RAM, 16GB Internal Storage'
    });
  }, 30000);
});
