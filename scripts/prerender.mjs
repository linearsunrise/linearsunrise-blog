import fs from 'node:fs'
import path from 'node:path'
import { createServer } from 'vite'

const root = process.cwd()
const distDir = path.join(root, 'dist')

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
})

const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
const appHtml = render()

await vite.close()

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
)

fs.writeFileSync(templatePath, html)

console.log('Prerendered dist/index.html')
