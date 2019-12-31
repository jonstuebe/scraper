import striptags from "striptags";
import Promise from "bluebird";

export const stripAndTrim = val => {
  return striptags(val)
    .replace(/\t/g, "")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/(\n){1,}/g, "\n")
    .trim();
};

export const lookupFailure = () => {
  return null;
};

export const getText = async (selector, page) => {
  const data = await page
    .$eval(selector, e => e.innerHTML)
    .catch(lookupFailure);

  return stripAndTrim(data);
};

export const getSrc = async (selector, page, wait = false) => {
  if (wait) {
    await page
      .waitForSelector(selector, { visible: true, timeout: 7500 })
      .catch(lookupFailure);
  }
  return await page.$eval(selector, e => e.src).catch(lookupFailure);
};
