// Makes the social share images (the preview card when a link is posted on
// Reddit, WhatsApp, iMessage, X and so on).
//   node scripts/make-og-images.mjs
// Writes public/images/og-image.png (the site default) and
// public/images/og/<slug>.png for every post. Re-run after adding a post.
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'
const { chromium } = createRequire(import.meta.url)('playwright')

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const font = name => pathToFileURL(join(root, 'scripts/og-fonts', name)).href
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const css = `
@font-face{font-family:Serif;font-weight:300;src:url(${font('source-serif-4-latin-300-normal.woff2')})}
@font-face{font-family:Serif;font-style:italic;font-weight:400;src:url(${font('source-serif-4-latin-400-italic.woff2')})}
@font-face{font-family:Sans;font-weight:400;src:url(${font('inter-latin-400-normal.woff2')})}
@font-face{font-family:Sans;font-weight:500;src:url(${font('inter-latin-500-normal.woff2')})}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#151515;color:#efefef;padding:64px 80px;display:flex;flex-direction:column;font-family:Sans}
.mark{font-family:Serif;font-style:italic;font-size:34px;letter-spacing:-.01em}
.main{flex:1;display:flex;flex-direction:column;justify-content:center;gap:22px}
.kicker{font-weight:500;font-size:20px;letter-spacing:.18em;text-transform:uppercase;color:#9a9a9a}
.title{font-family:Serif;font-weight:300;font-size:86px;line-height:1.04;letter-spacing:-.02em;max-width:1000px}
.desc{font-size:30px;line-height:1.4;color:#b5b5b5;max-width:900px}
.foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #2e2e2e;padding-top:26px;font-size:22px;color:#8c8c8c}
.big{font-family:Serif;font-style:italic;font-size:118px;letter-spacing:-.02em}
`
const page = body => `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`

const posts = readdirSync(join(root, 'src/content/blog'))
  .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  .map(f => {
    const fm = readFileSync(join(root, 'src/content/blog', f), 'utf8').split('---')[1]
    const get = k => (fm.match(new RegExp(`^${k}:\\s*['"](.*)['"]\\s*$`, 'm')) || [])[1] || ''
    return { slug: get('slug'), title: get('title'), description: get('description') }
  })

const browser = await chromium.launch()
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } })
const shoot = async (html, out) => {
  await tab.setContent(html, { waitUntil: 'load' })
  await tab.evaluate(() => document.fonts.ready)
  await tab.screenshot({ path: join(root, out) })
  console.log('wrote', out)
}

await shoot(
  page(`<div class="main"><div class="big">analogattention</div>
  <div class="desc">A digital garden for thinking clearly. Essays on attention, curiosity, and living deliberately.</div></div>
  <div class="foot"><span>analogattention.com</span><span>Journal</span></div>`),
  'public/images/og-image.png'
)
for (const p of posts) {
  const m = p.title.match(/^(Episode \d+):\s*(.*)$/)
  const kicker = m ? m[1] : 'Journal'
  const title = m ? m[2] : p.title
  await shoot(
    page(`<div class="mark">analogattention</div>
    <div class="main"><div class="kicker">${esc(kicker)}</div><div class="title">${esc(title)}</div>
    <div class="desc">${esc(p.description)}</div></div>
    <div class="foot"><span>analogattention.com</span><span>Read the essay</span></div>`),
    `public/images/og/${p.slug}.png`
  )
}
await browser.close()
