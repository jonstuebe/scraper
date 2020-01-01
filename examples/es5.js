const puppeteer = require('puppeteer');
const Scraper = require('../dist').default;

(async () => {
  const browser = await puppeteer.launch();

  const amazon = await Scraper(
    'https://www.amazon.com/dp/B075RWFCHB/ref_=fs_ods_fs_aucc_sr',
    browser
  );

  const target = await Scraper(
    'https://www.target.com/p/toms-iphone-6-7-leather-case-green-stripes/-/A-52796028',
    browser
  );

  const walmart = await Scraper(
    'https://www.walmart.com/ip/HP-11-v020wm-11-6-Chromebook-Corning-Gorilla-Glass-Touchscreen-Chrome-Intel-Celeron-N3060-Processor-4GB-RAM-16GB-eMMC-Drive/689038730?pltfm=desktop&pt=hp&athznid=ItemCarouselType_WPA&pgid=hp-0&cmp=-1&adgrp=-1&adUid=__adUid__&tax=__tax__&bkt=__bkt__&athcpid=689038730&relUUID=48c57087-32ef-4125-a254-2b8af27536f1&findingMethod=wpa&wpa_qs=VkpuuEQkXA7NjPwsYuSABcGwqazpHanHNG-sShstbN6b8TnsTsae9CvawhZf395X&itemId=689038730&adpgm=hl&plmt=__plmt__&tgtp=2&athena=true&athpgid=WPADesktopHP&isAthAd=true&relRank=5&adiuuid=1720babe-9c34-46c6-8d15-f2125af402fd',
    browser
  );

  await browser.close();

  console.log({
    amazon,
    target,
    walmart,
  });
})();
