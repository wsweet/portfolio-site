module.exports = function(eleventyConfig) {
  // Copy everything from src/assets → _site/assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};