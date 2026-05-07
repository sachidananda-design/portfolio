import { useEffect, useRef } from 'react'
import './Hero.css'

const PROFILE_URL = '/sachin_profile.png'


export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let raf

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,213,176,${p.alpha})`
        ctx.fill()
      })
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(232,213,176,${0.04 * (1 - dist/120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    draw()
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section className="hero" id="home">
      <canvas className="hero-canvas" ref={canvasRef} />

      {/* Decorative SVG lines */}
      <svg className="hero-lines" viewBox="0 0 800 600" fill="none">
        <circle cx="600" cy="80" r="180" stroke="rgba(232,213,176,0.04)" strokeWidth="1"/>
        <circle cx="600" cy="80" r="280" stroke="rgba(232,213,176,0.025)" strokeWidth="1"/>
        <circle cx="600" cy="80" r="380" stroke="rgba(232,213,176,0.015)" strokeWidth="1"/>
        <line x1="0" y1="550" x2="800" y2="550" stroke="rgba(232,213,176,0.04)" strokeWidth="1"/>
      </svg>

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="status-dot" />
            <span>Based in India · Open Globally</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-hi">Hi, I'm</span>
            <span className="hero-name">
              <em>Sachidananda</em>
              <span className="hero-name-dot">.</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Product designer fueled by curiosity — turning complex problems into
            elegant, thoughtful, and creative digital experiences.{' '}
            <span className="hero-years">4+ years</span> designing for web, mobile & AI.
          </p>

          <div className="hero-actions">
            <a href="#casestudies" className="btn-primary"
               onClick={(e) => { e.preventDefault(); document.querySelector('#casestudies')?.scrollIntoView({ behavior:'smooth' }) }}>
              View Case Studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className="btn-ghost"
               onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior:'smooth' }) }}>
              About Me
            </a>
          </div>

        </div>

        <div className="hero-right">
          <div className="avatar-container">
            <div className="avatar-ring ring-1" />
            <div className="avatar-ring ring-2" />
            <div className="avatar-ring ring-3" />
            <div className="avatar-glow" />
            <a
              href="mailto:sachinsahoo69943@gmail.com"
              className="avatar-frame"
              aria-label="Send an email"
              style={{ cursor: 'pointer' }}
            >
              <img
                src={PROFILE_URL}
                alt="Sachin profile"
                className="avatar-img"
              />
            </a>

            {/* Floating chips */}
            <div className="float-chip chip-1">
              <span className="chip-icon">✦</span>
              <div>
                <div className="chip-title">UX / UI</div>
                <div className="chip-sub">Product Design</div>
              </div>
            </div>
            <div className="float-chip chip-2">
              <span className="chip-icon">◆</span>
              <div>
                <div className="chip-title">AI Products</div>
                <div className="chip-sub">Prompt Eng.</div>
              </div>
            </div>
            <div className="float-chip chip-3">
              <span className="chip-icon">⬡</span>
              <div>
                <div className="chip-title">Design</div>
                <div className="chip-sub">Systems</div>
              </div>
            </div>
            <div className="float-chip chip-4">
              <span className="chip-icon">✧</span>
              <div>
                <div className="chip-title">GenAI Ads</div>
                <div className="chip-sub">Visual Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
