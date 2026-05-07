import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#casestudies' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
]

export default function Navbar({ activeSection = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    onNavigate?.(href)
  }

  const openCreativePage = () => {
    setOpen(false)
    window.open('/creative.html', '_blank', 'noreferrer')
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a className="logo" href="#home" onClick={(e) => { e.preventDefault(); handleLink('#home') }}>
          <img src="/sach_logo.png" alt="Sachidananda Logo" className="logo-img" />
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              className={`nav-link ${href.replace('#', '') === activeSection ? 'active' : ''}`}
              href={href}
              onClick={(e) => { e.preventDefault(); handleLink(href) }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="https://drive.google.com/file/d/13b89y-NvX7Ge1yyCIl9zo1cuY1qnm5U6/view?usp=drive_link"
            className="nav-cta nav-cta-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1V9M7 9L4 6M7 9L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>

          <a href="/creative.html" className="nav-cta nav-cta-creatives" target="_blank" rel="noreferrer" onClick={(e) => { e.preventDefault(); openCreativePage() }}>
            <span>Creatives</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <button className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); handleLink(href) }}
            >
              {label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/13b89y-NvX7Ge1yyCIl9zo1cuY1qnm5U6/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↧
          </a>
          <a href="/creative.html" target="_blank" rel="noreferrer" onClick={(e) => { e.preventDefault(); openCreativePage() }}>Creatives ↗</a>
        </div>
      )}
    </header>
  )
}
