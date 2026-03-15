const puppeteer = require('puppeteer');

async function main() {
  console.log('Launching browser...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // required for CI
  });

  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  
  const title = await page.title();
  console.log('Page title:', title);
  
  const heading = await page.$eval('h1', el => el.textContent);
  console.log('H1 heading:', heading);
  
  await browser.close();
  console.log('Done!');
}

main().catch(console.error);
