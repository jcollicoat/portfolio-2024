type ContentTypes =
    | 'about_me'
    | 'articles'
    | 'hero_home'
    | 'hero_page'
    | 'projects';

export interface PageContent {
    _type: ContentTypes;
}
