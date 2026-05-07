import { useEffect, useState } from 'react'
import Cursor from './Cursor'
import './Creatives.css'

/* ── Real curated images ── */
const ITEMS = [
  { id: 1, src: '/creatives/img (1).png', alt: 'Creative visual', size: 'c-hero' },
  { id: 2, src: '/creatives/img (1).gif', alt: 'Motion design', size: 'c-portrait' },
  { id: 3, src: '/creatives/img (2).png', alt: 'Creative visual', size: 'c-small' },
  { id: 4, src: '/creatives/img (2).gif', alt: 'Motion design', size: 'c-wide' },
  { id: 5, src: '/creatives/img (5).png', alt: 'Creative visual', size: 'c-square' },
  { id: 6, src: '/creatives/img (6).png', alt: 'Creative visual', size: 'c-portrait' },
  { id: 7, src: '/creatives/img (7).png', alt: 'Creative visual', size: 'c-wide' },
  { id: 8, src: '/creatives/img (8).png', alt: 'Creative visual', size: 'c-wide' },
  { id: 9, src: '/creatives/img (9).png', alt: 'Creative visual', size: 'c-hero' },
  { id: 10, src: '/creatives/img (10).png', alt: 'Creative visual', size: 'c-portrait' },
  { id: 11, src: '/creatives/img (11).png', alt: 'Creative visual', size: 'c-small' },
  { id: 12, src: '/creatives/img (12).png', alt: 'Creative visual', size: 'c-wide' },
  { id: 13, src: '/creatives/img (13).png', alt: 'Creative visual', size: 'c-square' },
  { id: 14, src: '/creatives/img (14).png', alt: 'Creative visual', size: 'c-portrait' },
  { id: 15, src: '/creatives/img (15).png', alt: 'Creative visual', size: 'c-full' },
  { id: 16, src: '/creatives/img (16).png', alt: 'Creative visual', size: 'c-wide' },
  { id: 17, src: '/creatives/img (17).png', alt: 'Creative visual', size: 'c-portrait' },
  { id: 18, src: '/creatives/img (18).png', alt: 'Creative visual', size: 'c-square' },
]

function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 60)
    return () => window.clearTimeout(id)
  }, [])
  return mounted
}

export default function Creatives() {
  const mounted = useMounted()
  const [preview, setPreview] = useState(null)

  /* Close lightbox on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setPreview(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  /* Lock body scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = preview ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [preview])



  return (
    <section className="cr-page">
      <Cursor />

      {/* ── Top nav ── */}
      <header className="cr-nav">
        <div className="container cr-nav-inner">
          <a className="cr-logo" href="/" aria-label="Back to home">
            <img src="/sach_logo.png" alt="Sachidananda Logo" className="cr-logo-img" />
          </a>
          <span className="cr-nav-right">Creative highlight</span>
        </div>
      </header>

      {/* ── Hero ── */}
      <header className="cr-hero">
        <div className="container cr-hero-inner">
          <h1 className="cr-title"><em>Creatives</em></h1>
          <p className="cr-copy">
            A curated mix of ad imagery, motion concepts, UI design, and photography
            presented in a dense, editorial masonry layout.
          </p>
          <div className="cr-scroll-arrow" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16M18 13l-6 7-6-7"/>
            </svg>
          </div>
        </div>
      </header>

      {/* ── Gallery ── */}
      <main className="cr-gallery">
        <div className="container">
          <div className={`cr-grid${mounted ? ' is-mounted' : ''}`}>
            {ITEMS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`cr-card ${item.size}`}
                style={{ '--delay': `${i * 55}ms` }}
                onClick={() => setPreview(item)}
                aria-label={`Preview image ${i + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={i < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="cr-footer">
        <div className="container">Since 2021 Sachidananda Sahoo — Designer</div>
      </footer>

      {/* ── Lightbox ── */}
      {preview && (
        <div
          className="cr-lb"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            className="cr-lb-close"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
          >
            ✕
          </button>
          <div
            className="cr-lb-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={preview.src}
              alt={preview.alt}
              className="cr-lb-img"
            />
          </div>
        </div>
      )}
    </section>
  )
}
