export class ArticlePageObjects {
    protected static ARTICLE_HEADER = `//h1`;
    protected static ARTICLE_DESCRIPTION_TEXT_XPATH = `//div[@class="row article-content"]/div/div/p`;
    protected static ARTICLE_TAG_TEXT_XPATH = `//ul[@class="tag-list"]/li`;
    protected static ARTICLE_BANNER_DELETE_BUTTON_XPATH = `//div[@class='banner']//button[contains(.,'Delete Article')]`;
    protected static ARTICLE_CONTAINER_DELETE_BUTTON_XPATH = `//div[@class="container page"]//button[contains(.,'Delete Article')]`;
    protected static ARTICLE_BANNER_EDIT_LINK_XPATH = `//div[@class='banner']//a[contains(.,'Edit Article')]`;
    protected static ARTICLE_CONTAINER_EDIT_LINK_XPATH = `//div[@class="container page"]//a[contains(.,'Edit Article')]`
    protected static ARTICLE_BANNER_DATE_TEXT_XPATH = `//div[@class='banner']//span[@class='date']`;
    protected static ARTICLE_CONTAINER_DATE_TEXT_XPATH = `//div[@class="container page"]//span[@class='date']`
    protected static ARTICLE_BANNER_AUTHOR_TEXT_XPATH = `//div[@class='banner']//a[@class='author'][contains(@href,'profile')]`;
    protected static ARTICLE_CONTAINER_AUTHOR_TEXT_XPATH = `//div[@class="container page"]//a[@class='author'][contains(@href,'profile')]`

}