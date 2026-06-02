import { motion } from 'framer-motion'
import { FiClock, FiGlobe, FiShield } from 'react-icons/fi'
import { TAGLINE } from '../../data/constants'
import { scrollToSection } from '../../hooks/useScrollTo'
import { Button } from '../ui/Button'
import { TrustBadges } from '../ui/TrustBadges'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=85&auto=format&fit=crop'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury train journey through India"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="luxury-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-4 font-sans text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            {TAGLINE}
          </p>
          <h1 className="mx-auto max-w-5xl font-serif text-5xl leading-[1.1] font-semibold text-white md:text-6xl lg:text-7xl xl:text-8xl">
            Experience India&apos;s Most{' '}
            <span className="text-gradient-gold">Luxurious</span> Train Journeys
          </h1>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-white/85 md:text-xl">
            Discover royal hospitality, world-class luxury, and unforgettable experiences
            aboard India&apos;s finest luxury trains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={() => scrollToSection('enquiry')}>
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection('trains')}
          >
            View Luxury Trains
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <div className="flex items-center gap-2 text-white/90">
            <FiShield className="h-5 w-5 text-gold" aria-hidden />
            <span className="font-sans text-sm">Authorized Specialists</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <FiClock className="h-5 w-5 text-gold" aria-hidden />
            <span className="font-sans text-sm">24/7 Assistance</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <FiGlobe className="h-5 w-5 text-gold" aria-hidden />
            <span className="font-sans text-sm">International Travelers Welcome</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <TrustBadges light compact />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={() => scrollToSection('why-us')}
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-gold"
          aria-label="Scroll to content"
        >
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase">Explore</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="block h-8 w-px bg-gold"
          />
        </button>
      </motion.div>
    </section>
  )
}
