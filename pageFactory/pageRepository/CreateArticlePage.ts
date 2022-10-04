import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig, testData} from '../../testConfig';
import { ArticlePageObjects } from "@objects/ArticlePageObjects";
import { CreateArticlePageObjects } from "@objects/CreateArticlePageObjects";

let webActions: WebActions;

export class CreateArticlePage extends CreateArticlePageObjects{
    readonly page: Page;
    
    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async inputArticleData(): Promise<void>{
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_TITLE_TEXTBOX_XPATH,testData.articleTitle); 
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_ABOUT_TEXTBOX_XPATH,testData.articleAbout);
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_DESCRIPTION_TEXTAREA_XPATH,testData.articleDescription);
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_TAG_TEXTBOX_XPATH,testData.articleTag);
        await webActions.keyPress(CreateArticlePageObjects.ARTICLE_TAG_TEXTBOX_XPATH,"Enter");
    }

    async updateArticleData(): Promise<void>{
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_TITLE_TEXTBOX_XPATH,""); 
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_TITLE_TEXTBOX_XPATH,testData.updatedArticleTitle); 
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_ABOUT_TEXTBOX_XPATH,"");
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_ABOUT_TEXTBOX_XPATH,testData.updatedArticleAbout);
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_DESCRIPTION_TEXTAREA_XPATH,"");
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_DESCRIPTION_TEXTAREA_XPATH,testData.updatedArticleDescription);
        await webActions.enterElementText(CreateArticlePageObjects.ARTICLE_TAG_TEXTBOX_XPATH,testData.updatedArticleTag);
        await webActions.keyPress(CreateArticlePageObjects.ARTICLE_TAG_TEXTBOX_XPATH,"Enter");
    }

    async verifyAllPageElementsAreVisible(): Promise<void> {
        await webActions.verifyElementIsDisplayed(CreateArticlePageObjects.PUBLISH_ARTICLE_BUTTON_XPATH,"Publish article button not displayed");
        await webActions.verifyElementIsDisplayed(CreateArticlePageObjects.ARTICLE_TITLE_TEXTBOX_XPATH,"Title text box not displayed");
        await webActions.verifyElementIsDisplayed(CreateArticlePageObjects.ARTICLE_DESCRIPTION_TEXTAREA_XPATH,"Description text area not displayed");
        await webActions.verifyElementIsDisplayed(CreateArticlePageObjects.ARTICLE_ABOUT_TEXTBOX_XPATH,"About text box not displayed");
        await webActions.verifyElementIsDisplayed(CreateArticlePageObjects.ARTICLE_TAG_TEXTBOX_XPATH,"Tag text box not displayed");
    }

    async clickOnPublishArticle(): Promise<void> {
        await webActions.clickElement(CreateArticlePageObjects.PUBLISH_ARTICLE_BUTTON_XPATH);
        await webActions.delay(1000);
    }
    

}