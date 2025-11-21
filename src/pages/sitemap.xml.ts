import { getCollection } from "astro:content";
import fs from "fs";
import path from "path";

// 获取文件最后修改时间
function getLastMod(filePath: string) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export async function GET() {
  const domain = "https://shinyan.top";

  // 1. 获取所有 blog 文章
  const posts = await getCollection("blog");
  const blogUrls = posts.map((post) => {
    const filePath = path.join(process.cwd(), "src/content/blog", post.slug + ".md");
    return `
  <url>
    <loc>${domain}/blog/${post.slug}/</loc>
    <lastmod>${getLastMod(filePath)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // 2. 扫描所有 pages（src/pages 下的 .astro）
  const pagesDir = path.join(process.cwd(), "src/pages");
  const staticPages = fs
    .readdirSync(pagesDir)
    .filter((f) => f.endsWith(".astro"))
    .map((file) => {
      const name = file.replace(".astro", "");
      const urlPath = name === "index" ? "" : name;

      const filePath = path.join(pagesDir, file);

      return `
  <url>
    <loc>${domain}/${urlPath}</loc>
    <lastmod>${getLastMod(filePath)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.join("")}
${blogUrls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
