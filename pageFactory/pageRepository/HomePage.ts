import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig, testData} from '../../testConfig';
import { ArticlePageObjects } from "@objects/ArticlePageObjects";
import { CreateArticlePageObjects } from "@objects/CreateArticlePageObjects";
import { HomePageObjects } from "@objects/HomePageObjects";

let webActions: WebActions;

export class HomePage extends HomePageObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(testConfig.url);
    }
    
   async clickOnSignInLink(): Promise<void> {
        await webActions.clickElement(HomePageObjects.SIGNIN_LINK_XPATH);
    }

    async clickOnHomeLink(): Promise<void> {
        await webActions.clickElement(HomePageObjects.HOME_LINK_XPATH);
        await webActions.delay(2000);
    }

    async clickOnGlobalFeedLink(): Promise<void> {
        await webActions.clickElement(HomePageObjects.GLOBALFEED_LINK_XPATH);
        await webActions.delay(5000);
    }

    async clickOnUserNameLink(): Promise<void> {
        await webActions.clickElement(HomePageObjects.USERNAME_LINK_XPATH);
        await webActions.delay(3000);
    }

    async clickOnNewArticleLink(): Promise<void> {
        await webActions.clickElement(HomePageObjects.NEWARTICLE_LINK_XPATH);
    }

    async verifyUserNameLink(): Promise<void> {
        await webActions.verifyElementText(HomePageObjects.USERNAME_LINK_XPATH, testConfig.username);
    }
    async waitForPageToLoad(): Promise<void> {
        await webActions.waitForPageNavigation("load");
    }
    waitForPageNavigation

    
    async verifyArticleIsPublishInGlobalFeeed(): Promise<void> {
        let visible = await webActions.isMyElementVisible("//app-article-preview//h1[text()='"+testData.articleTitle+"']");
        await webActions.expectToBeTrue(visible,"Article not visible");
    }
     
    async clickOnPublishedArticleLink(): Promise<void> {
        await webActions.clickElement("//app-article-preview//h1[text()='"+testData.articleTitle+"']");
    }

   
}