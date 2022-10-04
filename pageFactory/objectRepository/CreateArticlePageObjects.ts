export class CreateArticlePageObjects {
    protected static ARTICLE_TITLE_TEXTBOX_XPATH = `//input[@type="text"][@placeholder="Article Title"]`;
    protected static ARTICLE_ABOUT_TEXTBOX_XPATH = `//input[@type="text"][@placeholder="What\'s this article about?"]`;
    protected static ARTICLE_DESCRIPTION_TEXTAREA_XPATH = `//textarea[@placeholder="Write your article (in markdown)"]`;
    protected static ARTICLE_TAG_TEXTBOX_XPATH = `//input[@type="text"][@placeholder="Enter tags"]`;
    protected static PUBLISH_ARTICLE_BUTTON_XPATH = `//button[contains(.,"Publish Article")]`;
    protected static Header = `//h1`;
    protected static ARTICLE_TAG_TEXT_XPATH = `//div[@class='tag-list']/span`;
    
}