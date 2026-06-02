import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { scrollToSection } from '../../hooks/useScrollTo'
import { Button } from '../ui/Button'

const navLinks = [
  { label: 'Why Us', id: 'why-us' },
  { label: 'Luxury Trains', id: 'trains' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Reviews', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 py-3 shadow-xl shadow-navy/20 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group text-left"
        >
          <span className="font-serif text-xl font-semibold tracking-wide text-white md:text-2xl">
            Luxury Rail
          </span>
          <span className="block font-sans text-[10px] tracking-[0.3em] text-gold uppercase">
            Journeys India
          </span>
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                className="font-sans text-sm font-medium tracking-wide text-white/80 uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="sm" onClick={() => handleNav('enquiry')}>
            Get Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className="w-full py-3 text-left font-sans text-sm tracking-wide text-white/90 uppercase hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  size="md"
                  className="w-full"
                  onClick={() => handleNav('enquiry')}
                >
                  Get Free Quote
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
