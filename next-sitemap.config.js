/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://promoyamahaspmbandung.com';

const {
  motorListHome,
  productCategories,
} = require('./app/common/data/product.js');

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  lastmod: new Date().toISOString(),

  additionalPaths: async (config) => {
    const now = new Date().toISOString();

    // 🔹 Sitemap untuk semua produk (/product/[slug])
    const productUrls = motorListHome.map((motor) => ({
      loc: `${siteUrl}/product/${motor.key}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8,
    }));

    // 🔹 Sitemap untuk semua kategori (/product-category/[slug])
    const categoryUrls = productCategories.map((cat) => ({
      loc: `${siteUrl}/product-category/${cat.key}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.6,
    }));

    // Gabungkan semua URL jadi satu array
    return [...productUrls, ...categoryUrls];
  },

  exclude: ['/admin/*', '/api/*'],
};
