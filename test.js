const { Builder, By, until } = require('selenium-webdriver');

(async function basicTest() {
  // Open a Chrome browser
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to a page
    await driver.get('https://automationexercise.com');

    // Wait for an element to be visible, then find it
    const logo = await driver.wait(
      until.elementLocated(By.css('.logo')),
      5000 // wait up to 5 seconds
    );

    // Check it's actually displayed
    const isVisible = await logo.isDisplayed();
    console.log('Logo visible:', isVisible);

    // Check the page title
    const title = await driver.getTitle();
    console.log('Page title:', title);

  } finally {
    // Always close the browser, even if something fails
    await driver.quit();
  }
})();