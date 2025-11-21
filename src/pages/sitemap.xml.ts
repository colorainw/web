import { getCollection } from "astro:content";
import fs from "fs";
import path from "path";

function getLastMod(filePath: string) {
  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export const GET = async () => {
  const domain = "https://shinyan.top";

  // 1️⃣ 博客文章
  const posts = await getCollection("blog");
  const blogUrls = posts.map(post => {
    const filePath = path.join(process.cwd(), "src/content/blog", post.slug + ".md");
    return `
  <url>
    <loc>${domain}/blog/${post.slug}/</loc>
    <lastmod>${getLastMod(filePath)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // 2️⃣ 静态页面
  const pagesDir = path.join(process.cwd(), "src/pages");
  const staticPages = fs
    .readdirSync(pagesDir)
    .filter(f => f.endsWith(".astro") && !f.startsWith("sitemap"))
    .map(file => {
      const name = file.replace(".astro", "");
      const urlPath = name === "index" ? "" : name;
      const filePath = path.join(pagesDir, file);

      const priority = urlPath === "" ? 1.0 : 0.7;
      const changefreq = urlPath === "" ? "weekly" : "monthly";

      return `
  <url>
    <loc>${domain}/${urlPath}</loc>
    <lastmod>${getLastMod(filePath)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.join("")}
${blogUrls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
