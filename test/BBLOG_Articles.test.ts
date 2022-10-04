import { MyProfilePage } from '@pages/MyProfilePage';
import test from '../lib/BaseTest';

test.beforeEach(async ({ homePage,loginPage,createArticlePage ,articlePage, myProfilePage } , testInfo) => {
    await homePage.navigateToURL();
    await homePage.clickOnSignInLink();
    await loginPage.loginToApplication();
    await homePage.verifyUserNameLink();
  });
  

test(`@Smoke Verify user is able to create article and delete article TC_CA_001,TC_CA_002,TC_DA_001`, 
        async ({ homePage,loginPage,createArticlePage ,articlePage, myProfilePage }) => {

    await homePage.clickOnNewArticleLink();
    await createArticlePage.verifyAllPageElementsAreVisible();
    await createArticlePage.inputArticleData();
    await createArticlePage.clickOnPublishArticle();
    await articlePage.verifyArticleHeaderText();
    await articlePage.verifyArticleDescriptionText();
    await articlePage.verifyArticleTagText();
    await articlePage.verifyArticlePublishDate();
    await articlePage.verifyArticleAuthorText();
    await homePage.clickOnUserNameLink();
    await myProfilePage.verifyUsernameH4Textdisplayed();
    await myProfilePage.verifyArticleHeaderText();
    await myProfilePage.verifyArticleTagText();
    await myProfilePage.verifyArticleAboutText();
    await myProfilePage.verifyArticlePublishDate();
    await myProfilePage.clickOnFirstArticle();
    await articlePage.deleteArticle();
    await homePage.clickOnUserNameLink();
    await myProfilePage.verifyArticleIsDeleted();
    
});

test(`@Smoke Verify user is able to Update article and delete article TC_DA_002,TC_CA_003,TC_UA_001,TC_UA_002`,
        async ({ homePage,loginPage,createArticlePage ,articlePage, myProfilePage }) => {    
            
    await homePage.clickOnNewArticleLink();
    await createArticlePage.verifyAllPageElementsAreVisible();
    await createArticlePage.inputArticleData();
    await createArticlePage.clickOnPublishArticle();
    await homePage.clickOnHomeLink();
    await homePage.clickOnGlobalFeedLink();
    await homePage.verifyArticleIsPublishInGlobalFeeed();
    await homePage.clickOnPublishedArticleLink();
    await articlePage.verifyArticleHeaderText();
    await articlePage.editArticle();
    await createArticlePage.verifyAllPageElementsAreVisible();
    await createArticlePage.updateArticleData();
    await createArticlePage.clickOnPublishArticle();
    await articlePage.verifyArticleUpdatedData();
    await articlePage.deleteArticle();
    await homePage.clickOnUserNameLink();
    await myProfilePage.verifyArticleIsDeleted();
});

