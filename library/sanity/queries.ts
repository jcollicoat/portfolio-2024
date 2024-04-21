const homepage = `*[_type == "page" && name == "Homepage"][0] {
    meta_title,
    meta_description,
    "meta_image": meta_image.asset->url,
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

export { homepage };
