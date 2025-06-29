module.exports = function(eleventyConfig) {
  // Copy everything from src/assets → _site/assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  
  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByTag("projects").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};