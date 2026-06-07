import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const lines = fs.readFileSync(
  path.join(root, 'src/pages/AinotionLanding.jsx'),
  'utf8',
).split('\n')

function slice(start, end) {
  return lines.slice(start - 1, end).join('\n').trim()
}

function wrap(name, content) {
  return `export default function ${name}() {
  return (
    <>
${content}
    </>
  )
}
`
}

const sections = [
  { file: 'Header', name: 'Header', start: 8, end: 69 },
  { file: 'Hero', name: 'Hero', start: 76, end: 143 },
  { file: 'WhyFeatures', name: 'WhyFeatures', start: 147, end: 191 },
  { file: 'AboutSection', name: 'AboutSection', start: 195, end: 260 },
  { file: 'Testimonials', name: 'Testimonials', start: 264, end: 368 },
  { file: 'FeaturesGrid', name: 'FeaturesGrid', start: 372, end: 440 },
  { file: 'Pricing', name: 'Pricing', start: 444, end: 683 },
  { file: 'Process', name: 'Process', start: 687, end: 725 },
  { file: 'Blog', name: 'Blog', start: 729, end: 814 },
  { file: 'Contact', name: 'Contact', start: 818, end: 890 },
  { file: 'Footer', name: 'Footer', start: 894, end: 957 },
]

const outDir = path.join(root, 'src/components/ainotion')
fs.mkdirSync(outDir, { recursive: true })

const exports = []

for (const section of sections) {
  const content = slice(section.start, section.end)
  fs.writeFileSync(
    path.join(outDir, `${section.file}.jsx`),
    wrap(section.name, content),
    'utf8',
  )
  exports.push(section.file)
}

fs.writeFileSync(
  path.join(outDir, 'index.js'),
  exports.map((name) => `export { default as ${name} } from './${name}.jsx'`).join('\n') + '\n',
  'utf8',
)

const landing = `import {
  Header,
  Hero,
  WhyFeatures,
  AboutSection,
  Testimonials,
  FeaturesGrid,
  Pricing,
  Process,
  Blog,
  Contact,
  Footer,
} from '../components/ainotion'

export default function AinotionLanding() {
  return (
    <div id="dtr-wrapper" className="clearfix">
      <Header />
      <div id="dtr-main-content">
        <Hero />
        <WhyFeatures />
        <AboutSection />
        <Testimonials />
        <FeaturesGrid />
        <Pricing />
        <Process />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
`

fs.writeFileSync(path.join(root, 'src/pages/AinotionLanding.jsx'), landing, 'utf8')
console.log(`Split into ${sections.length} components in src/components/ainotion/`)
