const scraperObject = {
  url: "https://www.amazon.in/s?i=electronics&bbn=1389401031&rh=n%3A1389401031%2Cp_36%3A1318507031%2Cp_89%3AApple&dc&qid=1652804597&rnid=3837712031&ref=sr_nr_p_89_5",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    // Wait for the required DOM to be rendered
    await page.waitForSelector(".s-main-slot");
    // Get the link to all the required books
    let urls = await page.$$eval(
      "#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span > div.s-main-slot.s-result-list.s-search-results.sg-row > div > div > div > div > div > div.s-product-image-container.aok-relative.s-image-overlay-grey.s-text-center.s-padding-left-small.s-padding-right-small.s-spacing-small.s-height-equalized > span",
      (links) => {
        // Make sure the book to be scraped is in stock

        // Extract the links from the data
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
          "#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span > span.a-offscreen",
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

        // dataObj['productDescription'] = await newPage.$eval('#product_description', div => div.nextSibling.nextSibling.textContent);
        // dataObj['upc'] = await newPage.$eval('.table.table-striped > tbody > tr > td', table => table.textContent);
        resolve(dataObj);
        await newPage.close();
      });

    for (link in urls) {
      let currentPageData = await pagePromise(urls[link]);
      scrapedData.push(currentPageData);
    }
    await page.close();
    return scrapedData;
  },
};

module.exports = scraperObject;
