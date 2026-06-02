export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: "Which is India's most luxurious train?",
    answer:
      "The Maharajas' Express is widely considered India's—and the world's—most luxurious train. It features presidential suites, two fine-dining restaurants, a lounge bar, and butler service. Palace on Wheels and Deccan Odyssey also offer exceptional five-star experiences with distinct regional itineraries.",
  },
  {
    id: '2',
    question: 'How much does a luxury train journey cost?',
    answer:
      "Fares typically range from USD 3,500 to USD 25,000+ per person depending on the train, cabin category, season, and itinerary length. Maharajas' Express presidential suites command premium pricing, while Palace on Wheels offers excellent value for a week-long royal experience. We provide personalized quotes with best-available rates.",
  },
  {
    id: '3',
    question: 'What is included in the fare?',
    answer:
      'All luxury train fares include accommodation, all meals (often gourmet multi-course dining), guided off-train excursions, entrance fees to monuments, onboard entertainment, and basic beverages. International air travel, visas, gratuities, and premium spirits are typically extra—we provide a detailed breakdown with every quote.',
  },
  {
    id: '4',
    question: 'Are luxury trains suitable for international tourists?',
    answer:
      'Absolutely. These trains are designed for global travelers with English-speaking staff, international cuisine options, accessibility considerations, and seamless coordination. We specialize in assisting guests from the USA, UK, Europe, Australia, and beyond with planning, documentation, and on-ground support.',
  },
  {
    id: '5',
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking 6–12 months in advance for peak season (October–March), especially for Maharajas\' Express and Palace on Wheels. Shoulder seasons may have availability 3–4 months ahead. Early booking secures preferred cabins and allows time for visa processing and pre/post-tour arrangements.',
  },
]
