import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME } from '../../data/constants'

export function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelAgency',
        '@id': 'https://luxuryrailjourneys.com/#organization',
        name: SITE_NAME,
        url: 'https://luxuryrailjourneys.com',
        logo: 'https://luxuryrailjourneys.com/logo.png',
        description:
          "India's premier luxury train booking specialists for international travelers. Maharajas Express, Palace on Wheels, Deccan Odyssey, and Golden Chariot.",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        areaServed: 'Worldwide',
        priceRange: '$$$$',
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://luxuryrailjourneys.com/#website',
        url: 'https://luxuryrailjourneys.com',
        name: SITE_NAME,
        publisher: { '@id': 'https://luxuryrailjourneys.com/#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://luxuryrailjourneys.com/#webpage',
        url: 'https://luxuryrailjourneys.com',
        name: 'Luxury Train Booking India | Maharajas Express | Palace On Wheels',
        description:
          "Book India's finest luxury train journeys. Explore Maharajas Express, Palace on Wheels, Deccan Odyssey and Golden Chariot.",
        isPartOf: { '@id': 'https://luxuryrailjourneys.com/#website' },
        about: { '@id': 'https://luxuryrailjourneys.com/#organization' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Which is India's most luxurious train?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The Maharajas' Express is widely considered India's most luxurious train.",
            },
          },
          {
            '@type': 'Question',
            name: 'How much does a luxury train journey cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fares typically range from USD 3,500 to USD 25,000+ per person depending on train and cabin.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
