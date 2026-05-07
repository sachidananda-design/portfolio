import './Process.css'

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Stakeholder interviews, user research, competitive analysis, and problem framing. Understanding before solving.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="process-svg">
        <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="1"/>
        <line x1="31" y1="31" x2="42" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="4" fill="currentColor" opacity="0.2"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Synthesis of insights into HMW statements, user personas, journey maps, and prioritised opportunity areas.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="process-svg">
        <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1"/>
        <line x1="8" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
        <line x1="8" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
        <line x1="18" y1="8" x2="18" y2="40" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Rapid ideation, low-fidelity wireframes, design system components, and high-fidelity Figma prototypes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="process-svg">
        <path d="M24 8 L38 16 L38 32 L24 40 L10 32 L10 16 Z" stroke="currentColor" strokeWidth="1"/>
        <path d="M24 14 L32 18.5 L32 29.5 L24 34 L16 29.5 L16 18.5 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Iterate',
    desc: 'Usability testing, feedback synthesis, and design refinements that sharpen the experience before launch.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="process-svg">
        <path d="M12 18c3-5 9-8 15-8 8 0 14 6 14 14 0 3-1 6-3 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M36 33l2 0 0 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 33c-3 5-9 8-15 8-8 0-14-6-14-14 0-3 1-6 3-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M12 15l0-2 2 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.25"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Deliver',
    desc: 'Developer handoff, launch support, and post-launch metrics tracking to measure real impact.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="process-svg">
        <path d="M10 24 L20 34 L38 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Design Process</span>
          <h2 className="section-title">How I <em>Work</em></h2>
          <p className="section-desc">
            A research-driven, iterative process that balances speed with rigour — always starting from the problem, not the solution.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((s, i) => (
            <div className="process-card reveal" key={s.num} data-delay={i * 100}>
              <div className="process-num-line">
                <span className="process-num">{s.num}</span>
                {i < STEPS.length - 1 && <div className="process-connector" />}
              </div>
              <div className="process-icon-wrap">
                {s.icon}
              </div>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
