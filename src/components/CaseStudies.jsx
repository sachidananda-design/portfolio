import './CaseStudies.css'

const CASES = [
  {
    id: '01',
    title: 'TalentSpotify (Vihanga)',
    subtitle: 'CRM Dashboard',
    tags: ['Strategy', 'UX / UI', 'B2B SaaS'],
    desc: 'End-to-end design of a talent acquisition CRM — from discovery workshops to a production-ready design system used by 500+ recruiters.',
    color: '#2a2218',
    accent: '#e8a642',
    img: '/vihanga_crm_mockup.jpg',
    href: 'https://www.figma.com/proto/4jNbLKmQLFgel3bRUUQJZk/Vihanga-CRM-%7C-Casestudy?page-id=87%3A927&node-id=87-928&viewport=171%2C183%2C0.38&t=uRSquMRLW2ggzJyt-1&scaling=scale-down-width&content-scaling=fixed',
  },
  {
    id: '02',
    title: 'Reown',
    subtitle: 'Royal Enfield Pre-owned Marketplace',
    tags: ['UX / UI', 'E-commerce', 'Mobile', 'Web'],
    desc: 'Designed a trusted peer-to-peer marketplace for pre-owned Royal Enfield motorcycles — bridging enthusiast culture with seamless commerce.',
    color: '#1a1812',
    accent: '#f5c842',
    img: '/reown_casestudy_mockup.png',
    href: '/reown-casestudy.html',
    newTab: true,
  },
  {
    id: '04',
    title: 'Silasya',
    subtitle: 'Slow Fashion & Artisan Commerce',
    tags: ['E-commerce', 'UX / UI', 'Brand'],
    desc: 'A mindful commerce platform connecting independent artisans with conscious consumers — emphasising craft heritage through editorial storytelling.',
    color: '#1a0f0f',
    accent: '#f87171',
    img: '/silasya_mockup.png',
    href: 'https://www.figma.com/proto/CNPTyRT8jmHa39YylukmLH/Silasya-%7C-Ecom-%7C-Casestudy',
  },
  {
    id: '03',
    title: 'OptimoCapital',
    subtitle: 'Full-Stack Fintech Platform',
    tags: ['AI / UX', 'Fintech', 'SaaS'],
    desc: 'Designed a full-stack fintech platform to simplify investment workflows and portfolio tracking. Built a scalable design system across web and mobile, improving data clarity, usability, and decision-making for modern investors.',
    comingSoon: true,
    color: '#0f1520',
    accent: '#f05436',
    img: 'https://picsum.photos/seed/optimocapital/1200/900',
    href: '#',
  },
  {
    id: '05',
    title: 'Kalyan Jewellers Agent App',
    subtitle: 'Agent-Facing Sales Platform',
    tags: ['CRM', 'Mobile App', 'Product Design'],
    desc: 'Designed an agent-facing sales platform to streamline customer handling, product discovery, and transaction tracking. Enabled efficient session management, high-ticket client handling, and real-time performance monitoring for retail teams.',
    comingSoon: true,
    color: '#0a1520',
    accent: '#ff3b3b',
    img: 'https://picsum.photos/seed/kalyan/1200/900',
    gradient: 'linear-gradient(135deg, #0a1520 0%, #0f2340 50%, #162a4a 100%)',
    href: '#',
  },
  {
    id: '06',
    title: 'HealthyLink',
    subtitle: 'Telehealth Experience Platform',
    tags: ['HealthTech', 'UX/UI', 'Mobile'],
    desc: 'Designed a seamless telehealth experience for remote consultations and patient engagement. Built a clean, mobile-first interface and scalable design system to ensure accessibility, trust, and smooth doctor–patient interactions.',
    comingSoon: true,
    color: '#12080f',
    accent: '#0b8fac',
    img: 'https://picsum.photos/seed/healthylink/1200/900',
    gradient: 'linear-gradient(135deg, #12080f 0%, #200b1a 50%, #2d0f26 100%)',
    href: '#',
  },
]

export default function CaseStudies() {
  return (
    <section className="casestudies" id="casestudies">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            Case <em>Studies</em>
          </h2>
          <p className="section-desc">
            A curated collection of end-to-end design work across SaaS, AI, e-commerce, and consumer products.
          </p>
        </div>

        <div className="cs-grid">
          {CASES.map((c, i) => (
            <CaseCard key={c.id} data={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ data, index }) {
  const isExternal = /^https?:\/\//.test(data.href || '')
  const openInNewTab = isExternal || data.newTab
  const isFeatured = index < 2

  return (
    <a
      href={data.href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className={`cs-card ${isFeatured ? 'featured' : ''} reveal`}
      data-delay={index * 80}
      style={{ '--card-accent': data.accent, '--card-bg': data.color }}
    >
      <div className="cs-card-inner">
        {/* Image area */}
        <div className="cs-img-wrap">
          {data.comingSoon && (
            <span className="cs-coming-soon-badge">Coming Soon</span>
          )}
          {data.img ? (
            <img src={data.img} alt={data.title} className="cs-img" />
          ) : (
            <div className="cs-img-placeholder" style={{ background: data.gradient }}>
              <div className="placeholder-ornament">
                <svg viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                  <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                  <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                </svg>
              </div>
              <span className="cs-coming" style={{ color: data.accent }}>
                {data.subtitle}
              </span>
            </div>
          )}
          <div className="cs-overlay" />
          <div className="cs-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 17L17 3M17 3H7M17 3V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="cs-content">
          <div className="cs-top">
            <span className="cs-num">{data.id}</span>
            <div className="cs-tags">
              {data.tags.map(t => <span key={t} className="cs-tag">{t}</span>)}
            </div>
          </div>

          <div className="cs-body">
            <h3 className="cs-title">{data.title}</h3>
            <p className="cs-sub">{data.subtitle}</p>
            <p className="cs-desc">{data.desc}</p>
          </div>

          <div className="cs-footer">
            <span className="cs-view" style={{ color: data.accent }}>
              View Case Study
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
