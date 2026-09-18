const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');

(async function screenshotTest() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://automationexercise.com');

    // Wait for the page to be ready
    await driver.wait(until.elementLocated(By.css('.logo')), 5000);

    // Take the screenshot (returns a base64-encoded string)
    const image = await driver.takeScreenshot();

    // Make sure the screenshots folder exists
    if (!fs.existsSync('screenshots')) {
      fs.mkdirSync('screenshots');
    }

    // Save it as a real PNG file
    fs.writeFileSync('screenshots/homepage.png', image, 'base64');
    console.log('✅ Screenshot saved to screenshots/homepage.png');

  } finally {
    await driver.quit();
  }
})();