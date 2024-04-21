const slugs =
    '*[!(_id in path(\'drafts.**\')) && _type == "page" && name != "Homepage" && defined(slug.current)][].slug.current';

const page = `*[_type == "page" && slug.current == $slug][0] {
    meta_title,
    meta_description,
    "meta_image": meta_image.asset->url,
    name,
    theme,
    custom_theme,
    content[] {
        _type == "about_me" => {
            _type,
            education,
            experience,
        },
        _type == "articles" => {
            _type,
            articles_list[]-> {
                name,
                description,
                "image": file.asset->url,
                "image_dimensions": file.asset->metadata.dimensions,
                "slug": slug.current,
                tags[]-> {
                    name
                },
            }
        },
        _type == "hero_home" => {
            _type,
            heading,
            intro,
            cta
        },
        _type == "hero_page" => {
            _type,
            title,
            intro,
            include_image,
            "image": image.asset->url,
            "image_dimensions": image.asset->metadata.dimensions,
        },
        _type == "projects" => {
            _type,
            projects_list[]-> {
                name,
                description,
                "image": file.asset->url,
                "image_dimensions": file.asset->metadata.dimensions,
                "slug": slug.current,
                tags[]-> {
                    name
                },
            is_interactive
            }
        },
    }
}`;

const homepageMeta = `*[_type == "page" && name == "Homepage"][0] {
    meta_title,
    meta_description,
    "meta_image": meta_image.asset->url,
}`;

const homepage = `*[_type == "page" && name == "Homepage"][0] {
    name,
    theme,
    custom_theme,
    content[] {
        _type == "hero_home" => {
            _type,
            heading,
            intro,
            cta
        },
        _type == "projects" => {
            _type,
            projects_list[]-> {
                name,
                description,
                "image": file.asset->url,
                "image_dimensions": file.asset->metadata.dimensions,
                "slug": slug.current,
                tags[]-> {
                    name
                },
                is_interactive
            }
        },
    }
}`;

export { slugs, page, homepageMeta, homepage };
