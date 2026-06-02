import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'

const flagEmoji: Record<string, string> = {
  UK: '🇬🇧',
  USA: '🇺🇸',
  DE: '🇩🇪',
  AU: '🇦🇺',
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-beige py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="Loved by Travelers Worldwide"
          subtitle="Hear from international guests who experienced India's luxury trains with our expert guidance."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-sm border border-beige-dark bg-white p-8 shadow-lg shadow-navy/5"
            >
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FiStar key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="font-serif text-xl leading-relaxed text-navy italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center justify-between border-t border-beige-dark pt-6">
                <div>
                  <cite className="not-italic">
                    <p className="font-sans font-semibold text-navy">{item.name}</p>
                    <p className="mt-1 font-sans text-sm text-navy/60">
                      {flagEmoji[item.countryCode] ?? ''} {item.country}
                    </p>
                  </cite>
                </div>
                <div className="text-right">
                  <p className="font-sans text-xs tracking-wider text-navy/50 uppercase">
                    Traveled on
                  </p>
                  <p className="font-serif text-lg text-gold-dark">{item.train}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
