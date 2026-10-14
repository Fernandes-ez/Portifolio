// Roda depois do build: coloca o HTML de cada página dentro de <div id="root">, adiciona canônica, Open Graph e
// JSON-LD, e gera sitemap.xml. Fonte do conteúdo: src/entry-server.tsx (build SSR em dist-ssr).
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const { render, jsonld, SITE } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const paginas = [
  { key: 'home', file: 'index.html', path: '/' },
  { key: 'sites', file: 'sites/index.html', path: '/sites/' },
  { key: 'automacao', file: 'automacao/index.html', path: '/automacao/' },
  { key: 'sistemas', file: 'sistemas/index.html', path: '/sistemas/' },
  { key: 'termos', file: 'termos/index.html', path: '/termos/' },
  { key: 'privacidade', file: 'privacidade/index.html', path: '/privacidade/' },
  { key: '404', file: '404.html', path: null },
]

const esc = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const pegar = (html, re) => (html.match(re) ?? [])[1] ?? ''

for (const p of paginas) {
  const arquivo = resolve(dist, p.file)
  let html = await readFile(arquivo, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error(`${p.file}: <div id="root"></div> não encontrado`)

  const titulo = esc(pegar(html, /<title>([^<]*)<\/title>/).replace(/&amp;/g, '&'))
  const descricao = esc(pegar(html, /<meta name="description" content="([^"]*)"/))
  const url = p.path ? `${SITE}${p.path}` : null

  const head = []
  if (!url) {
    head.push('<meta name="robots" content="noindex" />')
  } else {
    head.push(
      `<link rel="canonical" href="${url}" />`,
      '<meta property="og:type" content="website" />',
      '<meta property="og:locale" content="pt_BR" />',
      '<meta property="og:site_name" content="ezf.tech" />',
      `<meta property="og:title" content="${titulo}" />`,
      `<meta property="og:description" content="${descricao}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${SITE}/og.png" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${titulo}" />`,
      `<meta name="twitter:description" content="${descricao}" />`,
      `<meta name="twitter:image" content="${SITE}/og.png" />`,
    )
    const dados = jsonld(p.key, p.path)
    if (dados) head.push(`<script type="application/ld+json">${JSON.stringify(dados).replace(/</g, '\\u003c')}</script>`)
  }

  html = html.replace('<div id="root"></div>', `<div id="root">${render(p.key)}</div>`)
  html = html.replace('</head>', `    ${head.join('\n    ')}\n  </head>`)
  await writeFile(arquivo, html)
  console.log('pré-renderizado:', p.file)
}

const hoje = new Date().toISOString().slice(0, 10)
const urls = paginas.filter((p) => p.path)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${hoje}</lastmod></url>`).join('\n')}
</urlset>
`
await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
console.log('sitemap.xml:', urls.length, 'páginas')
