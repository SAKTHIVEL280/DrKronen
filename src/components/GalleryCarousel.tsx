import { useState } from 'react'
import { Minus, Plus, Maximize2 } from 'lucide-react'

interface GalleryImage {
  src: string
  title: string
  desc: string
}

interface GalleryCarouselProps {
  galleryImages: GalleryImage[]
  whyChooseImg: string
  threeTubsDarkImg: string
  waterSplashPosterImg: string
  onImageClick: (src: string) => void
}

export default function GalleryCarousel({
  galleryImages,
  whyChooseImg,
  threeTubsDarkImg,
  waterSplashPosterImg,
  onImageClick
}: GalleryCarouselProps) {
  const [galleryIndex, setGalleryIndex] = useState(0)

  const nextGallery = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevGallery = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="relative max-w-7xl mx-auto px-6 py-28 border-b border-zinc-800/85">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.25em]">
            Visuals
          </span>
          <h2 className="font-serif font-light text-4xl text-zinc-100 tracking-wider uppercase mt-3">
            EXHIBITION DIARY
          </h2>
          <p className="text-zinc-500 text-sm mt-3 tracking-wide">
            Product photography, synthetic renders, and laboratory packaging specifications.
          </p>
        </div>
        
        {/* Minimal Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={prevGallery}
            className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-500 hover:text-zinc-100 transition-premium cursor-pointer"
            aria-label="Previous slide"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
            {galleryIndex + 1} / {galleryImages.length}
          </span>
          <button 
            onClick={nextGallery}
            className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:border-zinc-500 hover:text-zinc-100 transition-premium cursor-pointer"
            aria-label="Next slide"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Interactive Slide Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/10 border border-zinc-800/80 rounded-lg p-6 sm:p-8">
        
        {/* Left Side: Large Active Slide Image */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-lg border border-zinc-800 shadow-xl img-zoom-container bg-zinc-950">
          <img 
            key={galleryIndex}
            src={galleryImages[galleryIndex].src} 
            alt={galleryImages[galleryIndex].title} 
            className="w-full h-[320px] sm:h-[450px] object-cover cursor-pointer brightness-95 hover:brightness-100 transition-premium animate-scale-up"
            onClick={() => onImageClick(galleryImages[galleryIndex].src)}
          />
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-[8px] uppercase tracking-widest text-zinc-400 opacity-0 group-hover:opacity-100 transition-premium z-10">
            <Maximize2 className="w-3 h-3 text-zinc-500" /> Fullscreen
          </div>
        </div>

        {/* Right Side: Information Panel */}
        <div key={galleryIndex} className="lg:col-span-5 space-y-6 animate-slide-up">
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 font-mono">Mockup Render</span>
          <h3 className="font-serif font-light text-2xl sm:text-3xl text-zinc-200 uppercase tracking-wide">
            {galleryImages[galleryIndex].title}
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed tracking-wide min-h-[40px]">
            {galleryImages[galleryIndex].desc}
          </p>

          <div className="pt-4 grid grid-cols-4 gap-2">
            {galleryImages.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setGalleryIndex(idx)}
                className={`relative h-14 rounded-lg overflow-hidden border transition-premium cursor-pointer ${idx === galleryIndex ? 'border-zinc-300 scale-95' : 'border-zinc-850 opacity-60 hover:opacity-100'}`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Static Visual Showcase Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        
        {/* Box 1 */}
        <div 
          className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/30 group cursor-pointer transition-premium img-zoom-container" 
          onClick={() => onImageClick(whyChooseImg)}
        >
          <img src={whyChooseImg} alt="Why Choose Poster" className="w-full h-64 object-cover brightness-90 group-hover:brightness-100 transition-premium" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent flex flex-col justify-end p-5 z-10">
            <span className="font-serif text-sm text-zinc-150 uppercase tracking-wider">Features Panel</span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1.5 font-mono">Purity Standards</span>
          </div>
        </div>

        {/* Box 2 */}
        <div 
          className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/30 group cursor-pointer transition-premium img-zoom-container" 
          onClick={() => onImageClick(threeTubsDarkImg)}
        >
          <img src={threeTubsDarkImg} alt="3 Tubs Dark Display" className="w-full h-64 object-cover brightness-90 group-hover:brightness-100 transition-premium" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent flex flex-col justify-end p-5 z-10">
            <span className="font-serif text-sm text-zinc-150 uppercase tracking-wider">Triple Angle Mockup</span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1.5 font-mono">Dark Space rendering</span>
          </div>
        </div>

        {/* Box 3 */}
        <div 
          className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/30 group cursor-pointer transition-premium img-zoom-container" 
          onClick={() => onImageClick(waterSplashPosterImg)}
        >
          <img src={waterSplashPosterImg} alt="Light Water Splash" className="w-full h-64 object-cover brightness-90 group-hover:brightness-100 transition-premium" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent flex flex-col justify-end p-5 z-10">
            <span className="font-serif text-sm text-zinc-150 uppercase tracking-wider">Purity active display</span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1.5 font-mono">Water splash render</span>
          </div>
        </div>

      </div>
    </section>
  )
}
