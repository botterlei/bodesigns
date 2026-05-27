#!/usr/bin/env node
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SITE_URL = 'https://bodesigns.com'

const STATIC_ROUTES = [
  '/',
  '/about',
  '/work',
  '/ai',
  '/process',
  '/blog',
  '/resume',
]

async function listMdxSlugs(dir) {
  try {
    const entries = await readdir(dir)
    return entries
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => f.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
}

async function main() {
  const workDir = path.resolve('src/content/work')
  const blogDir = path.resolve('src/content/blog')
  const workSlugs = await listMdxSlugs(workDir)
  const blogSlugs = await listMdxSlugs(blogDir)

  const urls = [
    ...STATIC_ROUTES,
    ...workSlugs.map((s) => `/work/${s}`),
    ...blogSlugs.map((s) => `/blog/${s}`),
  ]

  const today = new Date().toISOString().split('T')[0]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`,
  )
  .join('\n')}
</urlset>
`
  await writeFile(path.resolve('dist/sitemap.xml'), xml, 'utf8')
  console.log(`sitemap.xml written with ${urls.length} URLs`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
