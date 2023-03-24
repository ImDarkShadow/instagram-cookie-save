import puppeteer from 'puppeteer';

const login = async () => {
    const browser = await puppeteer.launch({ headless: false }); // launch browser in non-headless mode
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);
    await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0"
    );

    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2'}); // navigate to login page


    await page.waitForNavigation({ waitUntil: 'networkidle2' }); // wait for page to load after login

    // save cookies to a file
    const cookies = await page.cookies();
    await browser.close(); // close the browser

    return JSON.stringify(cookies);

};

export default login;