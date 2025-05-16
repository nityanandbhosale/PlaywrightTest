import { test, expect } from "@playwright/test";

test('Verify the login with valid credentails', async ({ page }) => {
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    // page.on('request', request => console.log(request.url()));
    // page.on('response', response => console.log(response.url(), response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css 
    console.log(process.env.USER_ID)
    console.log(process.env.PASSWORD)
    await userName.fill(process.env.USER_ID);
    await page.locator("[type='password']").fill(process.env.PASSWORD);
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
})