export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style_dark.css");
    eleventyConfig.addPassthroughCopy("style_light.css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("darkmode.js");

    eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });
}