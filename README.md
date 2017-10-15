# Scraper
Node.js based scraper using headless chrome

[![version](https://img.shields.io/npm/v/@jonstuebe/scraper.svg?style=flat-square)](https://www.npmjs.com/package/@jonstuebe/scraper) [![dependecies](https://david-dm.org/jonstuebe/scraper.svg)](https://www.npmjs.com/package/@jonstuebe/scraper) [![build](https://travis-ci.org/jonstuebe/scraper.svg?branch=master)](https://www.npmjs.com/package/@jonstuebe/scraper)

## Installation

```bash
$ npm install @jonstuebe/scraper
```

## Features

  * Scrape top ecommerce sites (Amazon, Walmart, Target, BestBuy)
  * Return basic product information (title, price, image, description)
  * Easy to use API

## API
Simply require the package and initialize with a url and pass a callback function to receive the data.

#### es5
```js
const Scraper = require("@jonstuebe/scraper").default;

// run inside of an async function
(async () => {
  const data = await Scraper("http://www.amazon.com/gp/product/B00X4WHP5E/");
  console.log(data);
})();
```

#### es6
```js
import Scraper from "@jonstuebe/scraper";

// run inside of an async function
(async () => {
  const data = await Scraper('http://www.amazon.com/gp/product/B00X4WHP5E/');
  console.log(data);
})();
```

#### with promises
```js
import Scraper from "@jonstuebe/scraper";

Scraper('http://www.amazon.com/gp/product/B00X4WHP5E/').then(data => {
  console.log(data)
});
```

## Todos

  * Need to add ability to run a test to see if markup has changed, and if so disable the store selectors and fallback to the generic scraper.

## Contributing
If you want to add any sites, or just have an idea or feature, go ahead and fork [this repo](https://github.com/jonstuebe/scraper/) and send me a pull request. I'll be happy to take a look when I can and get back to you.

## Issues

For any and all issues/bugs, please post a description and code sample to reproduce the problem on the [issues page](https://github.com/jonstuebe/scraper/issues).

## License

  [MIT](LICENSE)