import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const sourceHtml = path.join(
  'C:',
  'Downloaded Web Sites',
  'tanshcreative.com',
  'ainotion-lp-preview',
  'assets',
  'index.html',
)

const html = fs.readFileSync(sourceHtml, 'utf8')
const wrapperMatch = html.match(
  /<div id="dtr-wrapper"[^>]*>([\s\S]*)<\/div>\s*<!-- #dtr-wrapper ends -->/,
)

if (!wrapperMatch) {
  throw new Error('dtr-wrapper not found in source HTML')
}

let jsx = wrapperMatch[1]

jsx = jsx.replace(/<!--[\s\S]*?-->/g, '')
jsx = jsx.replace(/\sclass=/g, ' className=')
jsx = jsx.replace(/\sfor=/g, ' htmlFor=')
jsx = jsx.replace(/\stabindex=/g, ' tabIndex=')
jsx = jsx.replace(/\sreadonly\b/g, ' readOnly')
jsx = jsx.replace(/\smaxlength=/g, ' maxLength=')
jsx = jsx.replace(/\sautocomplete=/g, ' autoComplete=')
jsx = jsx.replace(/assets\//g, '/assets/')
jsx = jsx.replace(/href="index\.html"/g, 'href="/"')

const voidTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]

for (const tag of voidTags) {
  const re = new RegExp(`<${tag}([^>]*?)>`, 'gi')
  jsx = jsx.replace(re, (match, attrs) => {
    if (match.trimEnd().endsWith('/>')) return match
    return `<${tag}${attrs} />`
  })
}

jsx = jsx.replace(/<br\s*\/?>/gi, '<br />')

jsx = jsx.replace(/style="([^"]*)"/g, (_, styleStr) => {
  const declarations = styleStr
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)

  const entries = declarations.map((declaration) => {
    const colonIndex = declaration.indexOf(':')
    const property = declaration.slice(0, colonIndex).trim()
    let value = declaration.slice(colonIndex + 1).trim()
    value = value.replace(/url\(([^)]+)\)/g, (_, url) => `url(${url.trim()})`)
    const camelProperty = property.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
    return `${camelProperty}: '${value}'`
  })

  return `style={{ ${entries.join(', ')} }}`
})

jsx = jsx.replace(
  /<form id="contactform" method="post" action="[^"]*">/,
  '<form id="contactform" method="post" action="#" onSubmit={(event) => event.preventDefault()}>',
)

const output = `/* Auto-generated from Ainotion HTML template */
export default function AinotionLanding() {
  return (
    <div id="dtr-wrapper" className="clearfix">
${jsx}
    </div>
  )
}
`

const outDir = path.join(root, 'src', 'pages')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'AinotionLanding.jsx'), output, 'utf8')
console.log('Created src/pages/AinotionLanding.jsx')
