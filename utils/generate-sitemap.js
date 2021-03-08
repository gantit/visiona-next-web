const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api'
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('.js', '')
          .replace('.mdx', '');
        const route = path === '/[lang]/index' ? '' : path;

        if (!route) {
          return null;
        }

        if (route === '/index') {
          return `
            <url>
              <loc>https://visiona.cat/es</loc>
            </url>
          `;
        }
        return `
          <url>
            <loc>${`https://visiona.cat${route.replace('[lang]', 'es')}`}</loc>
          </url>
        `;
      })
      .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();