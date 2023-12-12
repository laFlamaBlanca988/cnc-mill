import SitemapGenerator from "sitemap-generator";

// Specify your website URL
const hostname = "https://cncmill.tech";

// Initialize generator
const generator = new SitemapGenerator(hostname, {
  stripQuerystring: false, // Whether to remove query strings from URLs
  filepath: "./public/sitemap.xml", // Path where the sitemap will be saved
});

// Register event listeners
generator.on("add", (url) => {
  console.log(`Added ${url}`);
});

generator.on("done", () => {
  console.log("Sitemap generated!");
});

generator.on("error", (error) => {
  console.error(`Error generating sitemap: ${error}`);
});

// Start the generation process
generator.start();
