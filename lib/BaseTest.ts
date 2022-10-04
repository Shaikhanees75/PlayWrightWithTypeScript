import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { HomePage } from '@pages/HomePage';
import { ArticlePage } from '@pages/ArticlePage';
import { CreateArticlePage } from '@pages/CreateArticlePage';
import { MyProfilePage } from '@pages/MyProfilePage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    homePage: HomePage;
    articlePage: ArticlePage;
    createArticlePage: CreateArticlePage;
    myProfilePage : MyProfilePage;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    articlePage: async ({ page }, use) => {
        await use(new ArticlePage(page));
    },
    createArticlePage: async ({ page }, use) => {
        await use(new CreateArticlePage(page));
    },
    myProfilePage : async ({ page }, use) => {
        await use(new MyProfilePage(page));
    }
});

export default test;