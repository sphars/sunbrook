module.exports = function(eleventyConfig) {

    // copy static files to output
    eleventyConfig.addPassthroughCopy({
        // "node_modules/bulma/css/bulma.min.css": "assets/css/bulma.min.css",
        // "node_modules/bulma/css/bulma.css.map": "assets/css/bulma.css.map",
        "src/assets": "assets/",
        "src/*.ico":"/"
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: [
            "md",
            "html",
            "njk"
        ],
        markdownTemplateEngine: "njk"
    };
}