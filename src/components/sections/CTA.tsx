import { motion } from 'framer-motion'
import { scrollToSection } from '../../hooks/useScrollTo'
import { Button } from '../ui/Button'
import { TrustBadges } from '../ui/TrustBadges'

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1515169067865-5387ec6e8320?w=1920&q=80&auto=format&fit=crop'

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-32 md:py-40"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          aria-hidden
        />
        <div className="luxury-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Begin Your Journey
          </p>
          <h2
            id="cta-heading"
            className="font-serif text-5xl font-semibold text-white md:text-6xl lg:text-7xl"
          >
            Ready For A Royal Journey?
          </h2>
          <div className="gold-line mx-auto my-8" />
          <p className="mx-auto max-w-xl font-sans text-lg text-white/85">
            Let our specialists design your perfect luxury train experience—from cabin
            selection to complete India itineraries.
          </p>
          <div className="mt-10">
            <Button size="lg" onClick={() => scrollToSection('enquiry')}>
              Request Free Consultation
            </Button>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <TrustBadges light compact />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
