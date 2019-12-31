import striptags from "striptags";

export const stripAndTrim = (val: string) => {
  return striptags(val)
    .replace(/\t/g, "")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/(\n){1,}/g, "\n")
    .trim();
};

export const lookupFailure = () => {
  return null;
};

export const getText = async (selector: any, page: any) => {
  const data = await page
    .$eval(selector, (e: any) => e.innerHTML)
    .catch(lookupFailure);

  return stripAndTrim(data);
};

export const getSrc = async (selector: any, page: any, wait = false) => {
  if (wait) {
    await page
      .waitForSelector(selector, { visible: true, timeout: 7500 })
      .catch(lookupFailure);
  }
  return await page.$eval(selector, (e: any) => e.src).catch(lookupFailure);
};
