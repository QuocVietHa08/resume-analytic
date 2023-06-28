const fs = require('fs');
const globby = require('globby');

const addPage = (page) => {
  const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '');
  const route = path === '/index' ? '' : path;
  
  return `  <url>
    <loc>${`${process.env.BASE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

const generateSitemap = async () => {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    // './src/pages',
    './src/pages/**/*{.js,.mdx,.jsx}',
    '!pages/_*.js, _*.jsx',
    '!pages/api',
  ])



  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}
generateSitemap()
