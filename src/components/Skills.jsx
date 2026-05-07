import './Skills.css'

const MARQUEE_ITEMS = [
  'UX Research', '◆', 'Product Strategy', '✦', 'Figma', '◆', 'AI Prompting', '✧',
  'Design Systems', '◆', 'Prototyping', '✦', 'Visual UI', '◆', 'SaaS Design', '✧',
  'User Testing', '◆', 'Brand Identity', '✦', 'Interaction Design', '◆', 'Framer', '✧',
]

const SKILLS = [
  {
    icon: '◈',
    title: 'Product Design',
    desc: 'End-to-end product thinking from user research to launch — shaping features that are usable, useful, and delightful.',
    tools: ['Figma', 'FigJam', 'Framer', 'Stitch', 'Vibe Code'],
    level: 98,
  },
  {
    icon: '⬡',
    title: 'Design Systems',
    desc: 'Building scalable, token-based component libraries and documentation that empower engineering teams to ship consistently.',
    tools: ['Figma Variables', 'Storybook'],
    level: 95,
  },
  {
    icon: '◎',
    title: 'UX Research',
    desc: 'Qualitative & quantitative research — interviews, usability tests, surveys, and synthesis into actionable design directions.',
    tools: ['Maze', 'Heat mapping', 'Notion'],
    level: 90,
  },
  {
    icon: '✦',
    title: 'Gen AI Ads',
    desc: 'Designing AI-assisted ad workflows — from prompt systems and concept generation to on-brand creatives, iteration, and campaign-ready outputs.',
    tools: ['Claude', 'ChatGPT', 'Imagen 4', 'Gemini', 'Vertex AI'],
    level: 88,
  },
  {
    icon: '◇',
    title: 'Visual / Brand',
    desc: 'High-craft visual design, typography, and brand identity — with a sharp eye for composition, color, and emotional tone.',
    tools: ['Illustrator', 'Canva', 'Photoshop', 'Visual & Gen AI tools'],
    level: 92,
  },
  {
    icon: '⟡',
    title: 'Interaction Design',
    desc: 'Micro-interactions, motion design, and animated prototypes that communicate flow and delight with intent and purpose.',
    tools: ['Principle', 'Figma', 'Protopie', 'Lottie'],
    level: 85,
  },
]

const TOOLS = [
  { name: 'Figma' },
  { name: 'FigJam' },
  { name: 'Framer' },
  { name: 'Stitch' },
  { name: 'Vibe Code' },
  { name: 'Notion' },
  { name: 'Illustrator' },
  { name: 'Midjourney' },
  { name: 'Gemini' },
  { name: 'Vertex AI' },
  { name: 'ChatGPT' },
  { name: 'Gen AI' },
  { name: 'Claude AI' },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={item.length <= 2 ? 'marquee-sym' : 'marquee-text'}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">
            Skills &amp; <em>Craft</em>
          </h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div className="skill-card reveal" key={s.title} data-delay={i * 60}>
              <div className="skill-icon">{s.icon}</div>
              <h3 className="skill-name">{s.title}</h3>
              <p className="skill-desc">{s.desc}</p>
              <div className="skill-bar-wrap">
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ '--pct': s.level + '%' }} />
                </div>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-tools">
                {s.tools.map(t => <span key={t} className="skill-tool">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div className="tools-row reveal">
          <span className="section-label" style={{ marginBottom: 0 }}>Tools I use</span>
          <div className="tools-list">
            {TOOLS.map(t => (
              <div className="tool-pill" key={t.name}>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
