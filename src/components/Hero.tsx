import { ShieldCheck, Droplet, Info, Maximize2 } from 'lucide-react'
import { IMAGES, PRODUCT_CONFIG } from '@/constants'

interface HeroProps {
  onImageClick: (src: string) => void
}

export default function Hero({ onImageClick }: HeroProps) {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:py-36 min-h-[75vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Hero Content (Left) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-lg">
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.25em] opacity-0 animate-fade-in animation-fill-both">
            Pure Creatine Monohydrate • 250g
          </div>

          <h1 className="font-serif font-normal text-4xl sm:text-5xl xl:text-6xl leading-[1.25] text-metallic tracking-[0.08em] uppercase opacity-0 animate-slide-up animation-delay-100 animation-fill-both">
            BUILT IN SILENCE
          </h1>

          <p className="text-zinc-300 text-sm leading-relaxed tracking-wide opacity-0 animate-slide-up animation-delay-200 animation-fill-both">
            Sports nutrition formulated for athletes, gym enthusiasts, and individuals committed to consistent progress. Uncompromised chemical purity. Direct source. Zero fillers.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-4 gap-4 border-y border-zinc-800/80 py-6 opacity-0 animate-slide-up animation-delay-300 animation-fill-both">
            <div className="flex flex-col text-left">
              <span className="text-zinc-100 font-serif font-normal text-2xl tracking-wide">100%</span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.18em] mt-1.5 font-sans font-semibold">Purity</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-zinc-100 font-serif font-normal text-2xl tracking-wide">50</span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.18em] mt-1.5 font-sans font-semibold">Servings</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-zinc-100 font-serif font-normal text-2xl tracking-wide">250</span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.18em] mt-1.5 font-sans font-semibold">Grams</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-zinc-100 font-serif font-normal text-2xl tracking-wide">₹{PRODUCT_CONFIG.price}</span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.18em] mt-1.5 font-sans font-semibold">Price</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up animation-delay-400 animation-fill-both">
            <a 
              href="#shop" 
              className="px-8 py-4 rounded-lg font-bold bg-zinc-100 hover:bg-zinc-200 text-zinc-950 tracking-widest text-center uppercase transition-premium text-xs active:scale-95 shadow-md hover:shadow-lg"
            >
              Order Direct batch
            </a>
            <a 
              href="#calculator" 
              className="px-8 py-4 rounded-lg font-bold border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/20 text-zinc-400 hover:text-zinc-200 tracking-widest text-center uppercase transition-premium text-xs active:scale-95"
            >
              Dosage Calculator
            </a>
          </div>
        </div>

        {/* Hero Visual Showcase (Right) */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          {/* Soft Radial Spotlight Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.07)_0%,transparent_60%)] pointer-events-none"></div>

          {/* Displaying Product Mockup */}
          <div className="relative w-full max-w-[450px] flex items-center justify-center p-4 animate-luxury-float overflow-visible">
            <div className="relative group rounded-lg overflow-visible">
              <img 
                src={IMAGES.productFront} 
                alt="Dr. Kronen Creatine Tub Mockup" 
                className="w-full max-h-[440px] object-contain relative cursor-pointer filter brightness-95 hover:brightness-100 scale-[1.2] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.25]"
                onClick={() => onImageClick(IMAGES.productFront)}
              />
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[9px] uppercase tracking-widest text-zinc-300 opacity-0 group-hover:opacity-100 transition-premium z-10 whitespace-nowrap">
                <Maximize2 className="w-3 h-3 text-zinc-500" /> Click to enlarge
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap gap-4 items-center justify-center text-[10px] text-zinc-400 tracking-wider uppercase opacity-0 animate-fade-in animation-delay-500 animation-fill-both font-semibold">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-zinc-500" strokeWidth={2} /> Premium Quality</span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1.5"><Droplet className="w-3.5 h-3.5 text-zinc-500" strokeWidth={2} /> Micronized Blend</span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1.5"><Info className="w-3.5 h-3.5 text-zinc-500" strokeWidth={2} /> Pure & Unflavoured</span>
          </div>

        </div>

      </div>
    </section>
  )
}
