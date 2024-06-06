module.exports = function(eleventyConfig) {

    // copy static files to output
    eleventyConfig.addPassthroughCopy({
        "src/assets": "assets/",
        "src/favicon.ico":"/",
        "node_modules/@fontsource/noto-sans/": "assets/fonts/noto-sans/"
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