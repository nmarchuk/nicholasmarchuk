import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style_dark.css");
    eleventyConfig.addPassthroughCopy("style_light.css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("darkmode.js");
    eleventyConfig.addPassthroughCopy("utils.js");

    eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });

    eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json", "atom"
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Nicholas Marchuk's Blog",
			subtitle: "News and updates directly from Nick's mind.",
			base: "https://nicholasmarchuk.com/",
			author: {
				name: "Nicholas Marchuk",
				email: "info@nicholasmarchuk.com", // Optional
			}
		}
	});
}