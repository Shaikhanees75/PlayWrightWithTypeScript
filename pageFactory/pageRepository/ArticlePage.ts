import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig, testData} from '../../testConfig';
import { ArticlePageObjects } from "@objects/ArticlePageObjects";

let webActions: WebActions;

export class ArticlePage extends ArticlePageObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async editArticle(): Promise<void> {
        await webActions.clickElement(ArticlePageObjects.ARTICLE_BANNER_EDIT_LINK_XPATH);
        
    }

    async deleteArticle(): Promise<void> {
        await webActions.clickElement(ArticlePageObjects.ARTICLE_BANNER_DELETE_BUTTON_XPATH);
    }

    async verifyArticleHeaderText(): Promise<void> {
        await webActions.verifyElementText(ArticlePageObjects.ARTICLE_HEADER,testData.articleTitle);
    }

    async verifyArticleDescriptionText(): Promise<void> {
        await webActions.verifyElementText(ArticlePageObjects.ARTICLE_DESCRIPTION_TEXT_XPATH,testData.articleDescription);
    }
    async verifyArticleTagText(): Promise<void> {
        await webActions.verifyElementText(ArticlePageObjects.ARTICLE_TAG_TEXT_XPATH,testData.articleTag);
    }
    
    async verifyArticlePublishDate(): Promise<void> {
        await webActions.verifyElementText(ArticlePageObjects.ARTICLE_BANNER_DATE_TEXT_XPATH,await webActions.getCurrentDate());
    }

    async verifyArticleAuthorText(): Promise<void> {
        await webActions.verifyElementText(ArticlePageObjects.ARTICLE_BANNER_AUTHOR_TEXT_XPATH,testConfig.username);
    }

    async verifyArticleUpdatedData(): Promise<void> {
        await webActions.verifyElementText(ArticlePageObjects.ARTICLE_HEADER,testData.updatedArticleTitle);
        await webActions.verifyElementText(ArticlePageObjects.ARTICLE_DESCRIPTION_TEXT_XPATH,testData.updatedArticleDescription);
        
    }

}