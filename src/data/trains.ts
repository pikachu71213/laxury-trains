export interface LuxuryTrain {
  id: string
  name: string
  slug: string
  description: string
  routeHighlights: string[]
  duration: string
  rating: number
  image: string
  imageAlt: string
}

export const luxuryTrains: LuxuryTrain[] = [
  {
    id: 'maharajas-express',
    name: "Maharajas' Express",
    slug: 'maharajas-express',
    description:
      "Widely regarded as the world's most luxurious train, the Maharajas' Express offers an unrivaled journey through India's golden triangle and beyond—with presidential suites, fine dining, and butler service.",
    routeHighlights: ['Delhi', 'Agra', 'Jaipur', 'Ranthambore', 'Varanasi'],
    duration: '4–8 Days',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80&auto=format&fit=crop',
    imageAlt: "Maharajas' Express luxury train exterior",
  },
  {
    id: 'palace-on-wheels',
    name: 'Palace on Wheels',
    slug: 'palace-on-wheels',
    description:
      'A regal odyssey through Rajasthan aboard a train inspired by the carriages of maharajas. Experience palaces, desert forts, and timeless hospitality on India\'s most iconic luxury rail journey.',
    routeHighlights: ['Delhi', 'Jaipur', 'Jaisalmer', 'Jodhpur', 'Udaipur'],
    duration: '7 Nights / 8 Days',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1515169067865-5387ec6e8320?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Palace on Wheels luxury train',
  },
  {
    id: 'deccan-odyssey',
    name: 'Deccan Odyssey',
    slug: 'deccan-odyssey',
    description:
      "Discover the treasures of Maharashtra and Goa on this five-star hotel on wheels. From ancient caves to sun-kissed beaches, the Deccan Odyssey blends heritage with coastal elegance.",
    routeHighlights: ['Mumbai', 'Aurangabad', 'Goa', 'Kolhapur', 'Nashik'],
    duration: '7 Nights / 8 Days',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Deccan Odyssey scenic luxury journey',
  },
  {
    id: 'golden-chariot',
    name: 'Golden Chariot',
    slug: 'golden-chariot',
    description:
      "Southern India's crown jewel, the Golden Chariot traverses Karnataka's UNESCO World Heritage sites, wildlife sanctuaries, and temple towns in unmatched comfort and style.",
    routeHighlights: ['Bangalore', 'Mysore', 'Hampi', 'Goa', 'Kochi'],
    duration: '7 Nights / 8 Days',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Golden Chariot luxury train journey',
  },
]

export const trainOptions = luxuryTrains.map((t) => ({
  value: t.id,
  label: t.name,
}))
