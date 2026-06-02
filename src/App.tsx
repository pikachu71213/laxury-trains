import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { SchemaMarkup } from './components/seo/SchemaMarkup'
import { CTA } from './components/sections/CTA'
import { EnquiryForm } from './components/sections/EnquiryForm'
import { FAQ } from './components/sections/FAQ'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { Testimonials } from './components/sections/Testimonials'
import { TrainCollection } from './components/sections/TrainCollection'
import { WhyChooseUs } from './components/sections/WhyChooseUs'

function App() {
  return (
    <>
      <SchemaMarkup />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyChooseUs />
        <TrainCollection />
        <Gallery />
        <Stats />
        <EnquiryForm />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
