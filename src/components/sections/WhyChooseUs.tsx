import { motion } from 'framer-motion'
import { FiAward, FiDollarSign, FiHeadphones, FiMap } from 'react-icons/fi'
import { whyChooseUs } from '../../data/constants'
import { SectionHeading } from '../ui/SectionHeading'

const icons = [FiAward, FiMap, FiDollarSign, FiHeadphones]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-24 md:py-32" aria-labelledby="why-us-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Trusted Luxury Train Partner"
          subtitle="We specialize in crafting seamless, white-glove experiences for discerning international travelers exploring India by rail."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((card, index) => {
            const Icon = icons[index]
            return (
              <motion.article
                key={card.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-sm border border-beige-dark bg-beige p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/5"
              >
                <div className="mb-6 inline-flex rounded-sm bg-navy p-4 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-navy/70">
                  {card.description}
                </p>
                <div className="absolute right-0 bottom-0 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
