import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone, FiTwitter } from 'react-icons/fi'
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME } from '../../data/constants'
import { luxuryTrains } from '../../data/trains'
import { scrollToSection } from '../../hooks/useScrollTo'

const quickLinks = [
  { label: 'Why Choose Us', id: 'why-us' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Get a Quote', id: 'enquiry' },
]

const socialLinks = [
  { icon: FiFacebook, label: 'Facebook', href: '#' },
  { icon: FiInstagram, label: 'Instagram', href: '#' },
  { icon: FiTwitter, label: 'Twitter', href: '#' },
  { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-semibold">Luxury Rail</p>
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase">
              Journeys India
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
              {SITE_NAME} — your trusted partner for India&apos;s finest luxury train
              experiences. Serving international travelers with excellence since 2010.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="font-sans text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Luxury Trains
            </h3>
            <ul className="space-y-2">
              {luxuryTrains.map((train) => (
                <li key={train.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('trains')}
                    className="font-sans text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {train.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 font-sans text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <FiMail className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 font-sans text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <FiPhone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-sm border border-white/20 p-2.5 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-sans text-sm text-white/50">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/40">
            Luxury train booking specialists for international travelers.
          </p>
        </div>
      </div>
    </footer>
  )
}
