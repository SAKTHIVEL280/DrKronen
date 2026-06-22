import { useState } from 'react'

// Component imports
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductBuyBox from '@/components/ProductBuyBox'
import Features from '@/components/Features'
import Philosophy from '@/components/Philosophy'
import GalleryCarousel from '@/components/GalleryCarousel'
import DosageCalculator from '@/components/DosageCalculator'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ImageModal from '@/components/ui/ImageModal'
import ScrollReveal from '@/components/ui/ScrollReveal'
import IntroLoader from '@/components/ui/IntroLoader'
import BrandVideo from '@/components/BrandVideo'

export default function App() {
  // Global modal state for fullscreen preview
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  return (
    <div className="bg-dark-bg min-h-screen text-zinc-300 font-sans selection:bg-brand-blue selection:text-white pb-16">
      
      {/* 0. Premium Architectural Intro Loader */}
      <IntroLoader />
      
      {/* 1. Header & Navigation (Always static / sticky) */}
      <Header />

      {/* 2. Hero Section (Immediate load entry) */}
      <ScrollReveal delay={150}>
        <Hero onImageClick={setPreviewImage} />
      </ScrollReveal>

      {/* 3. Product Buy Box & Checkout Details */}
      <ScrollReveal>
        <ProductBuyBox onImageClick={setPreviewImage} />
      </ScrollReveal>

      {/* 4. Features Grid */}
      <ScrollReveal>
        <Features />
      </ScrollReveal>

      {/* 5. Philosophy Narrative Section */}
      <ScrollReveal>
        <Philosophy onImageClick={setPreviewImage} />
      </ScrollReveal>

      {/* 5.5. Cinematic Brand Showcase Video */}
      <ScrollReveal>
        <BrandVideo />
      </ScrollReveal>

      {/* 6. Image Carousel Exhibition */}
      <ScrollReveal>
        <GalleryCarousel onImageClick={setPreviewImage} />
      </ScrollReveal>

      {/* 7. Science-Based Dosage Calculator */}
      <ScrollReveal>
        <DosageCalculator />
      </ScrollReveal>

      {/* 8. FAQ Section */}
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      {/* 9. Footer Section */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

      {/* 10. Screen-Wide Visual Zoom Lightbox Modal */}
      <ImageModal 
        previewImage={previewImage} 
        onClose={() => setPreviewImage(null)} 
      />

    </div>
  )
}
