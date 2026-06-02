export interface Testimonial {
  id: string
  name: string
  country: string
  countryCode: string
  train: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Margaret & James Whitfield',
    country: 'United Kingdom',
    countryCode: 'UK',
    train: "Maharajas' Express",
    quote:
      "From the moment we boarded, every detail exceeded our expectations. The personalized itinerary, impeccable service, and cultural excursions made this the highlight of our retirement travels.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Robert Chen',
    country: 'United States',
    countryCode: 'USA',
    train: 'Palace on Wheels',
    quote:
      "As seasoned luxury travelers, we've cruised the Mediterranean and stayed at the finest hotels. Palace on Wheels rivaled them all—the Rajasthan route was simply magical.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Helena & Klaus Bauer',
    country: 'Germany',
    countryCode: 'DE',
    train: 'Deccan Odyssey',
    quote:
      'The team arranged everything flawlessly—from airport transfers to dietary preferences. We felt completely cared for as international guests throughout our journey.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David & Sarah Mitchell',
    country: 'Australia',
    countryCode: 'AU',
    train: 'Golden Chariot',
    quote:
      "Booking through Luxury Rail Journeys saved us weeks of research. Their expertise on cabin selection and travel timing was invaluable. We'll return for another route.",
    rating: 5,
  },
]
