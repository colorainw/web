import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';
import type { APIRoute } from 'astro';

// 获取文件最后修改时间
function getLastMod(filePath: string) {
  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export const GET: APIRoute = async () => {
  const domain = 'https://shinyan.top';

  // 1️⃣ 获取 blog 文章
  const posts = await getCollection('blog');
  const blogUrls = posts.map(post => {
    const filePath = path.join(process.cwd(), 'src/content/blog', post.slug + '.md');
    return `
  <url>
    <loc>${domain}/blog/${post.slug}/</loc>
    <lastmod>${getLastMod(filePath)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // 2️⃣ 获取静态页面 (.astro)
  const pagesDir = path.join(process.cwd(), 'src/pages');
  const staticPages = fs
    .readdirSync(pagesDir)
    .filter(f => f.endsWith('.astro') && !f.startsWith('sitemap'))
    .map(file => {
      const name = file.replace('.astro', '');
      const urlPath = name === 'index' ? '' : name;
      const filePath = path.join(pagesDir, file);

      // 优化优先级：主页 1.0，其他页面 0.7
      const priority = urlPath === '' ? 1.0 : 0.7;

      // 优化更新频率：主页 weekly，其余 monthly
      const changefreq = urlPath === '' ? 'weekly' : 'monthly';

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
${staticPages.join('')}
${blogUrls.join('')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
