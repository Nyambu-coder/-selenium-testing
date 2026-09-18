# Selenium WebDriver Practice

Basic browser automation tests built with **Selenium WebDriver** in JavaScript, exploring a lower-level alternative to Cypress.

## What's tested

- **Navigation** (`test.js`) — loads the homepage, waits for and clicks the Products link, verifies the URL and page heading updated correctly
- **Screenshots** (`screenshot.js`) — captures and saves a full-page screenshot to `screenshots/homepage.png`

## Tech stack

- Selenium WebDriver (JavaScript)
- Node.js / npm
- ChromeDriver

## Sample screenshot

![Homepage screenshot](screenshots/homepage.png)

## How this differs from Cypress

- No built-in test runner UI — tests run and report in the terminal
- No automatic waiting — elements are explicitly waited for with `driver.wait()`
- Browser launch/close is managed manually (`Builder().build()` / `driver.quit()`)
- Screenshots aren't automatic — captured and saved explicitly via `driver.takeScreenshot()`

## How to run these tests

1. Clone this repo
2. Run `npm install`
3. Run `node test.js` or `node screenshot.js`

## About me

QA professional building hands-on experience across multiple automation tools — Cypress, Selenium, and (soon) Playwright — alongside manual API testing with Postman.