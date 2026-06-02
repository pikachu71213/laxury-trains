import { motion } from 'framer-motion'
import { FiArrowRight, FiClock, FiMapPin, FiStar } from 'react-icons/fi'
import { luxuryTrains } from '../../data/trains'
import { scrollToSection } from '../../hooks/useScrollTo'
import { Button } from '../ui/Button'
import { LazyImage } from '../ui/LazyImage'
import { SectionHeading } from '../ui/SectionHeading'

export function TrainCollection() {
  return (
    <section id="trains" className="bg-beige py-24 md:py-32" aria-labelledby="trains-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Collection"
          title="India's Finest Luxury Trains"
          subtitle="Each journey is a moving palace—where heritage meets hospitality and every mile tells a story."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {luxuryTrains.map((train, index) => (
            <motion.article
              key={train.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-sm bg-white shadow-lg shadow-navy/5 transition-shadow hover:shadow-2xl hover:shadow-navy/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <LazyImage
                  src={train.image}
                  alt={train.imageAlt}
                  className="aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
                  <div>
                    <div className="mb-1 flex items-center gap-1 text-gold">
                      {Array.from({ length: train.rating }).map((_, i) => (
                        <FiStar key={i} className="h-4 w-4 fill-current" aria-hidden />
                      ))}
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-white">
                      {train.name}
                    </h3>
                  </div>
                  <span className="rounded-sm bg-gold/90 px-3 py-1 font-sans text-xs font-semibold text-navy">
                    {train.duration}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <p className="mb-6 font-sans leading-relaxed text-navy/75">
                  {train.description}
                </p>

                <div className="mb-6 flex items-start gap-2">
                  <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    <p className="font-sans text-xs font-semibold tracking-wider text-navy/50 uppercase">
                      Route Highlights
                    </p>
                    <p className="font-sans text-sm text-navy/80">
                      {train.routeHighlights.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-beige-dark pt-6">
                  <div className="flex items-center gap-2 text-navy/60">
                    <FiClock className="h-4 w-4 text-gold" aria-hidden />
                    <span className="font-sans text-sm">{train.duration}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToSection('enquiry')}
                    className="group/btn flex items-center gap-2 font-sans text-sm font-semibold tracking-wide text-gold uppercase transition-colors hover:text-gold-dark"
                  >
                    Explore
                    <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Button size="lg" onClick={() => scrollToSection('enquiry')}>
            Request Personalized Quote
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
