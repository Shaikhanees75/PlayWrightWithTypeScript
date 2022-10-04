// import {test, expect} from "@playwright/test"

// let url="https://candidatex:qa-is-cool@qa-task.backbasecloud.com/";
// let userName: string="bblogqaaneesshaikh";
// let email: string="bblogqaaneesshaikh@gmail.com";
// let password: string="Test@12345";
// let articleTitle : string ="TESTING ARTICLE TITLE";
// let articleAbout : string = "TESTING ARTICLE ABOUT";
// let articleDescription : string ="TESTING ARTICLE DESCRIPTION";
// let articleTag: string ="TESTINGTAG";


// test("Create Article with all valid values", async({page})=>{
//     await page.goto(url);

//     // Login to application
//     await expect(page.locator('//a[contains(.,"Sign in")]')).toBeVisible();
//     await page.locator('//a[contains(.,"Sign in")]').click();
//     await  expect(page.locator('//input[@formcontrolname="email"]')).toBeVisible();
//     await  page.locator('//input[@formcontrolname="email"]').fill(email);
//     await  page.locator('//input[@formcontrolname="password"]').fill(password);
//     await  page.locator('//button[@type="submit"]').click();
//     await  await page.waitForTimeout(2000);
//     await expect(page.locator('//a[contains(.,"Your Feed")]')).toBeVisible();

//     // Creating article 
//     await page.locator('//a[contains(.,"New Article")]').click();
//     await  await page.waitForTimeout(2000);
//     await expect(page.locator('//input[@type="text"][@placeholder="Article Title"]')).toBeVisible();
//     await page.locator('//input[@type="text"][@placeholder="Article Title"]').fill(articleTitle);
//     await page.locator('//input[@type="text"][@placeholder="What\'s this article about?"]').fill(articleAbout);
//     await page.locator('//textarea[@placeholder="Write your article (in markdown)"]').click();
//     await page.locator('//textarea[@placeholder="Write your article (in markdown)"]').type(articleDescription);
//     await page.locator('//input[@type="text"][@placeholder="Enter tags"]').fill(articleTag);
//     await page.locator('//input[@type="text"][@placeholder="Enter tags"]').press("Enter");
//     await  page.locator('//button[contains(.,"Publish Article")]').click();

//     //  Verify Created article 
//     // await expect(page.locator())
//     await page.waitForTimeout(2000);

//     //verifying article 

//     // await page.locator()
//     // await  page.locator('//input[@formcontrolname="email"]').fill("TEST1000");
// });