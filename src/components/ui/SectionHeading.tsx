import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 font-sans text-xs font-semibold tracking-[0.25em] uppercase ${
            light ? 'text-gold' : 'text-gold-dark'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <div className={`gold-line my-6 ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`mx-auto max-w-2xl font-sans text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-navy/70'
          } ${align === 'center' ? '' : 'mx-0'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
