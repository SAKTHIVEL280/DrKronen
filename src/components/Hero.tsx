import { ShieldCheck, Droplet, Info, Maximize2 } from 'lucide-react'

interface HeroProps {
  productFrontImg: string
  onImageClick: (src: string) => void
}

export default function Hero({ productFrontImg, onImageClick }: HeroProps) {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-28 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Hero Content (Left) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.25em]">
            Pure Creatine Monohydrate
          </div>

          <h1 className="font-serif font-bold text-5xl sm:text-6xl xl:text-7xl leading-[1.15] text-metallic tracking-wider uppercase">
            BUILT IN SILENCE
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed tracking-wide max-w-lg">
            Sports nutrition formulated for athletes, gym enthusiasts, and individuals committed to consistent progress. Uncompromised chemical purity. Direct source. Zero fillers.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 border-y border-zinc-800/80 py-8 my-2">
            <div className="flex flex-col text-left">
              <span className="text-zinc-100 font-serif font-medium text-2xl tracking-wide">100%</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Pure Creatine</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-zinc-100 font-serif font-medium text-2xl tracking-wide">50</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Servings / Tub</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-zinc-100 font-serif font-medium text-2xl tracking-wide">₹399</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Honest Price</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#shop" 
              className="px-8 py-4 rounded-lg font-bold bg-brand-blue hover:bg-blue-750 text-white tracking-widest text-center uppercase transition-premium text-xs btn-luxury"
            >
              Order Direct batch
            </a>
            <a 
              href="#calculator" 
              className="px-8 py-4 rounded-lg font-bold border border-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 tracking-widest text-center uppercase transition-premium text-xs bg-zinc-900/30 btn-luxury"
            >
              Dosage Calculator
            </a>
          </div>
        </div>

        {/* Hero Visual Showcase (Right) */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          {/* Background Clean Rings */}
          <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] border border-zinc-900 rounded-full pointer-events-none"></div>
          <div className="absolute w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] border border-zinc-800/40 rounded-full pointer-events-none"></div>

          {/* Displaying Product Mockup */}
          <div className="relative w-full max-w-[450px] flex items-center justify-center p-4">
            <div className="relative group img-zoom-container rounded-lg">
              <img 
                src={productFrontImg} 
                alt="Dr. Kronen Creatine Tub Mockup" 
                className="w-full max-h-[440px] object-contain relative cursor-pointer filter brightness-95 hover:brightness-100"
                onClick={() => onImageClick(productFrontImg)}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[9px] uppercase tracking-widest text-zinc-300 opacity-0 group-hover:opacity-100 transition-premium z-10">
                <Maximize2 className="w-3 h-3 text-zinc-500" /> Click to enlarge
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center text-[10px] text-zinc-500 tracking-wider uppercase">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-zinc-600" /> Premium Quality</span>
            <span className="text-zinc-800">•</span>
            <span className="flex items-center gap-1.5"><Droplet className="w-3.5 h-3.5 text-zinc-600" /> Micronized Blend</span>
            <span className="text-zinc-800">•</span>
            <span className="flex items-center gap-1.5"><Info className="w-3.5 h-3.5 text-zinc-600" /> Pure & Unflavoured</span>
          </div>

        </div>

      </div>
    </section>
  )
}
