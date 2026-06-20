import { useState } from 'react'

// Import visual assets directly from assets folder
import logoImg from './assets/images/file_0000000091dc7230b92f4351f884cc4d.png'
import productFrontImg from './assets/images/bg_removed.png'
import productFrontWithBackdropImg from './assets/images/file_000000002b0471fab26c0f3c916aa348.png'
import productBackImg from './assets/images/file_00000000174471fa9576a45bd8d2d610.png'
import productLabelImg from './assets/images/file_0000000042a47207a577edf5c5381c1b.png'
import threeTubsDarkImg from './assets/images/file_00000000a3d072078dca7a9b382fa2f0.png'
import modelPosterImg from './assets/images/file_00000000290072089d6357a075f8c265.png'
import lightningPosterImg from './assets/images/file_00000000886472089f25e162a9e48e81.png'
import waterSplashPosterImg from './assets/images/file_0000000060a071fa8fc36671791db277.png'
import affordablePosterImg from './assets/images/file_00000000aa74720880a160a622934f29.png'
import launchOfferImg from './assets/images/file_000000006f787206b3a14812542d1a18.png'
import twoTubsGreyImg from './assets/images/file_00000000b5f872099ca82e3c7a674bb8.png'
import gymMockupImg from './assets/images/file_00000000ea30720795520da875af8433.png'
import iceMockupImg from './assets/images/file_00000000909471fa802618494394969b.png'
import whyChooseImg from './assets/images/file_00000000102072078b8a972b127a602d.png'
import deserveBlueImg from './assets/images/file_000000002b1471fa8f7f65e178e351dd.png'

// Component imports
import Header from './components/Header'
import Hero from './components/Hero'
import ProductBuyBox from './components/ProductBuyBox'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import GalleryCarousel from './components/GalleryCarousel'
import DosageCalculator from './components/DosageCalculator'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ImageModal from './components/ImageModal'
import ScrollReveal from './components/ScrollReveal'
import IntroLoader from './components/IntroLoader'
import BrandVideo from './components/BrandVideo'

export default function App() {
  // Global modal state for fullscreen preview
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const galleryImages = [
    { 
      src: lightningPosterImg, 
      title: "Built in Silence (Dark Theme)", 
      desc: "Representing the dedication of training behind closed doors." 
    },
    { 
      src: waterSplashPosterImg, 
      title: "Pure & Potent (Light Splash)", 
      desc: "Highlighting raw pharmaceutical-grade micronized purity." 
    },
    { 
      src: gymMockupImg, 
      title: "Hard Work Refined", 
      desc: "No shortcuts. No additives. Pure fuel for muscle strength." 
    },
    { 
      src: iceMockupImg, 
      title: "Wet & Crisp Reflection", 
      desc: "Formulated for instant solubility and recovery support." 
    },
    { 
      src: affordablePosterImg, 
      title: "Top Quality, Honest Price", 
      desc: "Direct to consumer. Cutting out middleman markups." 
    },
    { 
      src: deserveBlueImg, 
      title: "Purest Creatine Deserved", 
      desc: "Uncompromised quality standards for elite athletes." 
    },
    { 
      src: twoTubsGreyImg, 
      title: "Raw & Unflavoured", 
      desc: "Clean label formula without fillers or added sugars." 
    }
  ]

  return (
    <div className="bg-dark-bg min-h-screen text-zinc-300 font-sans selection:bg-brand-blue selection:text-white pb-16">
      
      {/* 0. Premium Architectural Intro Loader */}
      <IntroLoader />
      
      {/* 1. Header & Navigation (Always static / sticky) */}
      <Header logoImg={logoImg} />

      {/* 2. Hero Section (Immediate load entry) */}
      <ScrollReveal delay={150}>
        <Hero 
          productFrontImg={productFrontImg} 
          onImageClick={setPreviewImage} 
        />
      </ScrollReveal>

      {/* 3. Product Buy Box & Checkout Details */}
      <ScrollReveal>
        <ProductBuyBox 
          productFrontImg={productFrontWithBackdropImg}
          productBackImg={productBackImg}
          productLabelImg={productLabelImg}
          launchOfferImg={launchOfferImg}
          onImageClick={setPreviewImage}
        />
      </ScrollReveal>

      {/* 4. Features Grid */}
      <ScrollReveal>
        <Features />
      </ScrollReveal>

      {/* 5. Philosophy Narrative Section */}
      <ScrollReveal>
        <Philosophy 
          threeTubsDarkImg={threeTubsDarkImg}
          modelPosterImg={modelPosterImg}
          onImageClick={setPreviewImage}
        />
      </ScrollReveal>

      {/* 5.5. Cinematic Brand Showcase Video */}
      <ScrollReveal>
        <BrandVideo logoImg={logoImg} />
      </ScrollReveal>

      {/* 6. Image Carousel Exhibition */}
      <ScrollReveal>
        <GalleryCarousel 
          galleryImages={galleryImages}
          whyChooseImg={whyChooseImg}
          threeTubsDarkImg={threeTubsDarkImg}
          waterSplashPosterImg={waterSplashPosterImg}
          onImageClick={setPreviewImage}
        />
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
        <Footer logoImg={logoImg} />
      </ScrollReveal>

      {/* 10. Screen-Wide Visual Zoom Lightbox Modal */}
      <ImageModal 
        previewImage={previewImage} 
        onClose={() => setPreviewImage(null)} 
      />

    </div>
  )
}
