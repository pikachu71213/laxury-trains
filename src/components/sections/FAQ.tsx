import { faqItems } from '../../data/faq'
import { Accordion } from '../ui/Accordion'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything international travelers need to know about booking India's luxury trains."
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
