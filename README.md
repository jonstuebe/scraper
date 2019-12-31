# Scraper

Node.js based scraper using headless chrome

[![version](https://img.shields.io/npm/v/@jonstuebe/scraper.svg?style=flat-square)](https://www.npmjs.com/package/@jonstuebe/scraper) [![dependecies](https://david-dm.org/jonstuebe/scraper.svg)](https://www.npmjs.com/package/@jonstuebe/scraper) [![build](https://travis-ci.org/jonstuebe/scraper.svg?branch=master)](https://www.npmjs.com/package/@jonstuebe/scraper)

## Installation

```bash
$ npm install @jonstuebe/scraper
```

## Features

- Scrape top ecommerce sites (Amazon, Walmart, Target)
- Return basic product information (title, price, image, description)
- Easy to use API to scrape any website

## API

Simply require the package and initialize with a url and pass a callback function to receive the data.

#### es5

```js
const Scraper = require('@jonstuebe/scraper').default;

// run inside of an async function
(async () => {
  const data = await Scraper('http://www.amazon.com/gp/product/B00X4WHP5E/');
  console.log(data);
})();
```

#### es6

```js
import Scraper from '@jonstuebe/scraper';

// run inside of an async function
(async () => {
  const data = await Scraper('http://www.amazon.com/gp/product/B00X4WHP5E/');
  console.log(data);
})();
```

#### with promises

```js
import Scraper from '@jonstuebe/scraper';

Scraper('http://www.amazon.com/gp/product/B00X4WHP5E/').then(data => {
  console.log(data);
});
```

#### shared scraper instance

If you are going to be running the scraper a number of times in succession, it's recommended to share the same chromium instance for each sequential/parallel scrape.

```js
import puppeteer from 'puppeteer';
import Scraper from '@jonstuebe/scraper';

// run inside of an async function
(async () => {
  const browser = await puppeteer.launch();
  let products = [
    'https://www.target.com/p/corinna-angle-leg-side-table-wood-threshold-8482/-/A-53496420',
    'https://www.target.com/p/glasgow-metal-end-table-black-project-62-8482/-/A-52343433',
  ];

  let productsData = [];
  for (const product of products) {
    const productData = await Scraper(product, browser);
    productsData.push(productData);
  }

  await browser.close(); // make sure and close the browser otherwise the instances will continue to run in the backround on your machine

  console.table(productsData);
})();
```

#### emulate devices

If you want to emulate a device, pass in a puppeteer device as the third agument:

```js
import puppeteer from 'puppeteer';
import Scraper from '@jonstuebe/scraper';

// run inside of an async function
(async () => {
  const data = await Scraper(
    'http://www.amazon.com/gp/product/B00X4WHP5E/',
    null,
    puppeteer.devices['iPhone SE']
  );
  console.log(data);
})();
```

#### custom scrapers

```js
const Scraper = require('@jonstuebe/scraper');

(async () => {
  const site = {
    name: 'npm',
    hosts: ['www.npmjs.com'],
    scrape: async page => {
      const name = await Scraper.getText('div.content-column > h1 > a', page);
      const version = await Scraper.getText(
        'div.sidebar > ul:nth-child(2) > li:nth-child(2) > strong',
        page
      );
      const author = await Scraper.getText(
        'div.sidebar > ul:nth-child(2) > li.last-publisher > a > span',
        page
      );

      return {
        name,
        version,
        author,
      };
    },
  };

  const data = await Scraper.scrape(
    'https://www.npmjs.com/package/lodash',
    site
  );
  console.log(data);
})();
```

## Contributing

If you want to add any sites, or just have an idea or feature, go ahead and fork [this repo](https://github.com/jonstuebe/scraper/) and send me a pull request. I'll be happy to take a look when I can and get back to you.

## Issues

For any and all issues/bugs, please post a description and code sample to reproduce the problem on the [issues page](https://github.com/jonstuebe/scraper/issues).

## License

[MIT](LICENSE)
