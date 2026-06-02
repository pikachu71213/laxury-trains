export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  span?: 'tall' | 'wide' | 'normal'
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80&auto=format&fit=crop',
    alt: 'Royal suite luxury cabin interior',
    category: 'Royal Suites',
    span: 'tall',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop',
    alt: 'Fine dining aboard luxury train',
    category: 'Fine Dining',
    span: 'wide',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1544620337-477debdffa87?w=600&q=80&auto=format&fit=crop',
    alt: 'Elegant luxury cabin',
    category: 'Luxury Cabins',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1515169067865-5387ec6e8320?w=600&q=80&auto=format&fit=crop',
    alt: 'Train interior lounge',
    category: 'Train Interiors',
    span: 'tall',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1524492412937-336c9d4f0ca5?w=600&q=80&auto=format&fit=crop',
    alt: 'Cultural experience at Indian monument',
    category: 'Cultural Experiences',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop',
    alt: 'Scenic route through Indian landscape',
    category: 'Scenic Routes',
    span: 'wide',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format&fit=crop',
    alt: 'Luxury train bar and lounge',
    category: 'Train Interiors',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80&auto=format&fit=crop',
    alt: 'Scenic journey through mountains',
    category: 'Scenic Routes',
    span: 'tall',
  },
]
