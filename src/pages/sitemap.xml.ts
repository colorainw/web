import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  const urls = posts
    .map(
      (post) => `
  <url>
    <loc>https://shinyan.top/blog/${post.slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
