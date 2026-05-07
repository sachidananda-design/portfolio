import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Skills from './components/Skills'
import Process from './components/Process'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const sectionIds = ['home', 'casestudies', 'skills', 'process', 'about']

  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = e.target.dataset.delay || 0
          setTimeout(() => e.target.classList.add('visible'), Number(delay))
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    // Keep the active nav item in sync with scroll position.
    // The bug came from replacing content instead of keeping every section mounted.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      { threshold: [0.2, 0.4, 0.6] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navigate = (target) => {
    const header = document.querySelector('.navbar')
    const offset = header?.offsetHeight ?? 0
    const id = target.replace('#', '')

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('home')
      return
    }

    const el = document.getElementById(id)
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    setActiveSection(el.id)
  }

  return (
    <>
      <Cursor />
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      <main>
        <Hero />
        <CaseStudies />
        <Skills />
        <Process />
        <About />
      </main>
      <Footer />
    </>
  )
}
