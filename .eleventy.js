const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  
  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByTag("projects").reverse();
  });

  eleventyConfig.addPlugin(syntaxHighlight);

   // This is the new rule that will fix the Markdown rendering
  eleventyConfig.setLibrary("markdown", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  }));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};