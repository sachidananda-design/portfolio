import { useState } from 'react'
import './About.css'

const PROFILE_URL = '/sachin_profile.png'
const OPTIMO_URL = 'https://optimocapital.in/'
const INNERTRIBE_URL = 'https://innertribe.in/'
const PROTOCOL35_URL = 'https://protocol35.com/'
const MILLD_URL = 'https://milld.com/'

const EXPERIENCE = [
  {
    period: 'Feb 2025 — Present',
    role: 'Product Designer',
    company: <><a href={OPTIMO_URL} className="highlight highlight-link highlight-link-no-underline" target="_blank" rel="noopener noreferrer">Optimo Capital</a> · Founder's Office · Fintech · Onsite</>,
    bullets: [
      'Embedded within the Founder\'s Office under Prashant Pitti (Co-founder), owning end-to-end product and brand design across multiple ventures.',
      <>
        Designed <a href={OPTIMO_URL} className="highlight highlight-link" target="_blank" rel="noopener noreferrer">Optimo Capital’s</a> website (Home, Product, About, Locator, Eligibility, Property Valuation), improving engagement and reducing drop-offs.
      </>,
      'Designed and implemented a high-conversion loan application interaction flow, including AI-assisted animation for the “Apply Loan” journey.',
      'Conducted field research and user interviews to understand customer behavior, translating insights into intuitive and interactive experiences.',
      'Built a scalable brand design system, standardizing visual identity across teams and reducing revision cycles.',
      <>
        Designed <a href={INNERTRIBE_URL} className="highlight highlight-link" target="_blank" rel="noopener noreferrer">innertribe.in</a> and <a href={PROTOCOL35_URL} className="highlight highlight-link" target="_blank" rel="noopener noreferrer">protocol35.com</a> in the pre-launch phase, leading UX and interaction design using AI-assisted workflows.
      </>,
      'Designed reseller dashboard UX with improved tracking flows; also created UI for Phase 2 (in development) to enhance sales team efficiency.',
      'Created social media creatives, ad campaigns, and marketing content for Optimo Capital, InnerTribe, and Protocol35.',
      'Designed a regional Paytm campaign landing page, generating 200K+ impressions and 1K+ qualified leads.',
      <>
        Improved <a href={MILLD_URL} className="highlight highlight-link" target="_blank" rel="noopener noreferrer">Mill D</a>’s UI, boosting first-month conversions, and supported ad and reel creation.
      </>,
    ],
  },
  {
    period: 'Jun 2023 — Nov 2024',
    role: 'UI/UX Designer',
    company: <><span className="highlight">Netscribes</span> · B2B Data & Research · Remote</>,
    bullets: [
      <>
        Led UI/visual design for the <span className="highlight">Kalyan Jewellers</span> Clientelling App, simplifying agent–customer interaction flows.
      </>,
      'Delivered UX across B2B, D2C, and SaaS projects; consistently achieved sign-off in first review cycles.',
      'Led UX audits, competitive analysis, and persona development across 5 pre-sale proposals.',
      <>
        Designed creatives and white papers, while suggesting UI improvements for the <span className="highlight">TMA systems</span> to enhance usability and clarity.
      </>,
    ],
  },
  {
    period: 'Jan 2023 — May 2023',
    role: 'UI Designer Intern',
    company: <><span className="highlight">Onething Design Studio</span> · Remote</>,
    bullets: [
      <>
        Built a scalable <span className="highlight">atomic design system</span> (80+ components) used across multiple studio projects.
      </>,
      <>
        Redesigned <span className="highlight">RE-OWN</span> (Royal Enfield\'s resale platform), improving the digital experience.
      </>,
    ],
  },
  {
    period: 'Jun 2021 — May 2022',
    role: 'Designer Intern',
    company: <><span className="highlight">HighRadius</span> · Order-to-Cash SaaS · Remote</>,
    bullets: [
      'Improved core product UI pages and helped document component guidelines for the internal design system.',
    ],
  },
]

const FREELANCE = [
  {
    role: 'Product Designer',
    company: 'Talent Spotify',
    tag: 'CRM & HR Dashboard',
    url: 'https://vihanga.talentspotifyapp.com/auth/login',
    desc: 'Redesigned recruiter dashboard and candidate management flows to reduce task friction for HR teams.',
  },
  {
    role: 'Lead Product Designer',
    company: 'Silasya',
    tag: 'D2C Artisan Clothing · In development',
    url: 'https://beta.silasya.com/',
    desc: 'Designed an artisan-led D2C e-commerce platform, improving navigation through research, wireframing, and iterative design. Led UX research and improved purchase flows.',
  },
  {
    role: 'UX/UI Designer',
    company: 'Finitee',
    tag: 'Hangout & Social App',
    url: 'https://play.google.com/store/apps/details?id=com.comwick.finitee&pli=1',
    desc: 'Redesigned onboarding and engagement flows, improving user retention through a clearer first-launch experience.',
  },
  {
    role: 'E-commerce Specialist',
    company: 'Gable Solutions',
    tag: 'Etsy Store Optimization',
    desc: 'Optimized Etsy listings to improve visibility, search ranking, and store performance, while also creating social creatives to support promotions.',
  },
  {
    role: 'Graphic & Deck Designer',
    company: 'Korslet Creative Agency',
    tag: 'Branding & Presentations',
    desc: 'Designed impactful graphics and presentation decks to enhance client communication and overall brand engagement.',
  },
]

const BELIEFS = [
  { icon: '🎯', title: 'Problem-first thinking', desc: 'Design only earns its value when it solves a real problem for a real person. I start there.' },
  { icon: '🤝', title: 'Collaborative craft', desc: 'The best work comes from close collaboration between design, engineering, and product.' },
  { icon: '📐', title: 'Systems over screens', desc: 'I design scalable systems — components, patterns, principles — not just individual screens.' },
  { icon: '✨', title: 'Delight in the details', desc: 'Micro-interactions, typography choices, and spacing decisions signal craft and intention.' },
]

const CORE_SKILLS = [
  'Product Design','UX Research','Design Systems','AI Products',
  'Figma','Framer','Prototyping','User Testing','Visual Design','Prompt Eng.',
]

export default function About() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sachinsahoo69943@gmail.com')
      setCopied(true)
      window.clearTimeout(window.__emailCopyTimer)
      window.__emailCopyTimer = window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Header */}
        <div className="about-header reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title about-title">
            Designed to solve,<br />not just <em>to ship.</em>
          </h2>
        </div>

        {/* Top grid */}
        <div className="about-top">
          <div className="about-bio reveal">
            <p className="bio-lead">
              I'm <strong>Sachidananda Sahoo</strong> — a UX/UI &amp; Product Designer with 4+ years of
              experience building digital products people actually enjoy using.
            </p>
            <p className="bio-body">
              Based in India, I work with teams globally across B2B SaaS, consumer, eCommerce, and AI.
              I focus on balancing simplicity with depth — making complex things feel effortless.
            </p>
            <p className="bio-body">
              Lately, I've been deeply exploring <span className="highlight">Generative AI advertising</span> —
              creating AI-driven creatives and using prompt engineering to craft impactful ad experiences
              that scale without sacrificing brand soul.
            </p>

            <div className="about-contact">
              <button type="button" className="contact-btn contact-btn-copy" onClick={copyEmail} aria-label="Copy email address">
                <span className="contact-icon">✉</span>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">sachinsahoo69943@gmail.com</div>
                  {copied && <div className="contact-copied">Copied to clipboard</div>}
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="contact-copy-icon" aria-hidden="true">
                  <path d="M4 4.5V3.25C4 2.56 4.56 2 5.25 2H10.75C11.44 2 12 2.56 12 3.25V8.75C12 9.44 11.44 10 10.75 10H9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </button>
              <a href="https://www.linkedin.com/in/sachidananda-sahoo-263171191/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <span className="contact-icon">in</span>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">Sachidananda Sahoo</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="contact-arrow">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Avatar + skills */}
          <div className="about-card reveal" data-delay="120">
            <div className="about-avatar-wrap">
              <img src={PROFILE_URL} alt="Sachin profile" className="about-avatar" />
              <div className="about-available">
                <span className="avail-dot" />
                Available for new projects
              </div>
            </div>
            <div className="about-card-info">
              <div className="about-card-name">Sachidananda Sahoo</div>
              <div className="about-card-role">UX/UI · Product Designer · Prompt Engineer</div>
              <div className="about-card-loc">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5C2.5 7.25 6 11 6 11C6 11 9.5 7.25 9.5 4.5C9.5 2.57 7.93 1 6 1Z" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="6" cy="4.5" r="1.2" fill="currentColor"/>
                </svg>
                India · Open to Global
              </div>
              <div className="about-skills">
                {CORE_SKILLS.map(s => (
                  <span key={s} className="about-skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="experience">
          <div className="section-label reveal">Work Experience</div>
          <div className="exp-list">
            {EXPERIENCE.map((e, i) => (
              <div className="exp-item reveal" key={e.period} data-delay={i * 80}>
                <div className="exp-period">{e.period}</div>
                <div className="exp-body">
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  {e.bullets && (
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Projects */}
        <div className="experience freelance-section">
          <div className="section-label reveal">Freelance Projects</div>
          <div className="exp-list">
            {FREELANCE.map((f, i) => (
              <div className="exp-item reveal" key={f.company} data-delay={i * 80}>
                <div className="exp-period freelance-company">{f.company}</div>
                <div className="exp-body">
                  <div className="exp-role">{f.role}</div>
                  <div className="exp-company">
                    {f.url ? (
                      <a href={f.url} className="exp-tag exp-tag-link" target="_blank" rel="noopener noreferrer" aria-label={`Open ${f.company}`}>
                        <span>{f.tag}</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <span className="exp-tag">{f.tag}</span>
                    )}
                  </div>
                  <p className="exp-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beliefs */}
        <div className="beliefs">
          <div className="section-label reveal">What I believe in</div>
          <div className="beliefs-grid">
            {BELIEFS.map((b, i) => (
              <div className="belief-card reveal" key={b.title} data-delay={i * 80}>
                <span className="belief-icon">{b.icon}</span>
                <div>
                  <div className="belief-title">{b.title}</div>
                  <div className="belief-desc">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="about-cta reveal">
          <div className="cta-text">
            <h3>Let's build something <em>remarkable.</em></h3>
            <p>Open to freelance projects, full-time roles, and design collaborations.</p>
          </div>
          <a href="https://wa.link/en5pfs" target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
            Say Hello
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
