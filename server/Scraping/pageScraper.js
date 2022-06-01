const scraperObject = {
  url: "https://www.amazon.in/s?k=",
  async scraper(browser, category) {
    let page = await browser.newPage();
    let categoryUrl = `${this.url}${category}`;
    console.log(`Navigating to ${categoryUrl}...`);
    // Navigate to the selected page
    await page.goto(categoryUrl);

    let scrapedData = [];
    // Wait for the required DOM to be rendered
    async function scrapeCurrentPage() {
      await page.waitForSelector("#search");
      // Get the link to all the required books

      let urls = await page.$$eval(
        "#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-4-of-16.sg-col-4-of-20.s-list-col-left > div > div.s-product-image-container.aok-relative.s-image-overlay-grey.s-text-center.s-padding-left-small.s-padding-right-small.s-flex-expand-height > div > span",
        (links) => {
          // deals = links.filter(
          //   (link) => link.querySelector("span.a-badge") !== null
          // );

          // links = links.filter((link) => !deals.includes(link));

          links = links.map((el) => el.querySelector("a").href);
          return links;
        }
      );
      // Loop through each of those links, open a new page instance and get the relevant data from them
      let pagePromise = (link) =>
        new Promise(async (resolve, reject) => {
          let dataObj = {};
          let newPage = await browser.newPage();
          await newPage.goto(link);
          dataObj["productTitle"] = await newPage.$eval(
            "#title",
            (text) => text.textContent
          );

          dataObj["productPrice"] = await newPage.$eval(
            "#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen",
            (text) => text.textContent
          );

          // dataObj['noAvailable'] = await newPage.$eval('.instock.availability', text => {
          // 	// Strip new line and tab spaces
          // 	text = text.textContent.replace(/(\r\n\t|\n|\r|\t)/gm, "");
          // 	// Get the number of stock available
          // 	let regexp = /^.*\((.*)\).*$/i;
          // 	let stockAvailable = regexp.exec(text)[1].split(' ')[0];
          // 	return stockAvailable;
          // });

          dataObj["imageUrl"] = await newPage.$eval(
            "#landingImage",
            (img) => img.src
          );
          resolve(dataObj);
          await newPage.close();
        });

      for (link in urls) {
        let currentPageData = await pagePromise(urls[link]);
        scrapedData.push(currentPageData);
        // console.log(currentPageData);
      }
      // When all the data on this page is done, click the next button and start the scraping of the next page
      // You are going to check if this button exist first, so you know if there really is a next page.
      //   let nextButtonExist = false;
      //   try {
      //     const nextButton = await page.$eval(".next > a", (a) => a.textContent);
      //     nextButtonExist = true;
      //   } catch (err) {
      //     nextButtonExist = false;
      //   }
      //   if (nextButtonExist) {
      //     await page.click(".next > a");
      //     return scrapeCurrentPage(); // Call this function recursively
      //   }
      await page.close();
      return scrapedData;
    }
    let data = await scrapeCurrentPage();
    console.log(data);
    return data;
  },
};

module.exports = scraperObject;
