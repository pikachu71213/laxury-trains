import { motion } from 'framer-motion'
import { galleryImages } from '../../data/gallery'
import { LazyImage } from '../ui/LazyImage'
import { SectionHeading } from '../ui/SectionHeading'

const spanClasses = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  normal: '',
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-navy py-24 md:py-32" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Experience"
          title="Luxury Beyond the Rails"
          subtitle="Step inside a world of refined elegance—from presidential suites and gourmet dining to cultural immersions and breathtaking landscapes."
          light
        />

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[180px]">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-sm ${spanClasses[image.span ?? 'normal']}`}
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="h-full min-h-[200px] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute right-0 bottom-0 left-0 p-5">
                <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
                  {image.category}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
