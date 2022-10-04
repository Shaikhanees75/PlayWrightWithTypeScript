import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig, testData} from '../../testConfig';
import { ArticlePageObjects } from "@objects/ArticlePageObjects";
import { CreateArticlePageObjects } from "@objects/CreateArticlePageObjects";
import { MyProfilePageObjects } from "@objects/MyProfilePageObjects";

let webActions: WebActions;

export class MyProfilePage extends MyProfilePageObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    
    async clickOnFirstArticle(): Promise<void> {
        await webActions.clickElement(MyProfilePageObjects.ARTICLE_PREVIEW_LINK_XPATH);
    }

    async verifyArticleIsDeleted(): Promise<void> {

        // await webActions.verifyElementIsDisplayed("//app-article-preview//h1[text()='"+testConfig.articleTitle+"']","Article Is Deleted");
        let visible = await webActions.isMyElementVisible("//app-article-preview//h1[text()='"+testData.articleTitle+"']");
        await webActions.expectToBeFalse(visible,"Article Is not Deleted")
    }

    async verifyUsernameH4Textdisplayed(): Promise<void> {
        await webActions.verifyElementIsDisplayed(MyProfilePageObjects.ARTICLE_H4_USERNAME_TEXT_XPATH,"My profile page not loaded");
        await webActions.verifyElementText(MyProfilePageObjects.ARTICLE_H4_USERNAME_TEXT_XPATH,testConfig.username);
    }

    async verifyArticleHeaderText(): Promise<void> {
        await webActions.verifyElementText(MyProfilePageObjects.ARTICLE_TITILE_H1_TEXT_XPATH,testData.articleTitle);
    }

    async verifyArticlePublishDate(): Promise<void> {
        await webActions.verifyElementText(MyProfilePage.ARTICLE_CONTAINER_DATE_TEXT_XPATH,await webActions.getCurrentDate());
    }

    async verifyArticleTagText(): Promise<void> {
        await webActions.verifyElementText(MyProfilePage.ARTICLE_TAG_TEXT_XPATH,testData.articleTag);
    }

    async verifyArticleAboutText(): Promise<void> {
        await webActions.verifyElementText(MyProfilePage.ARTICLE_ABOUT_TEXT_XPATH,testData.articleAbout);
    }
    
}