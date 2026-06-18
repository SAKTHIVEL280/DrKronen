import { InstagramIcon } from './Icons'

interface PhilosophyProps {
  threeTubsDarkImg: string
  modelPosterImg: string
  onImageClick: (src: string) => void
}

export default function Philosophy({
  threeTubsDarkImg,
  modelPosterImg,
  onImageClick
}: PhilosophyProps) {
  return (
    <section id="purity" className="relative py-28 bg-zinc-950 border-t border-zinc-800/80 overflow-hidden">
      {/* Editorial backdrop using subtle background image details */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 filter grayscale pointer-events-none" 
        style={{ backgroundImage: `url(${threeTubsDarkImg})` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center font-sans">
          
          {/* Left Column: Narrative Details */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.25em]">
              The Narrative
            </span>
            <h3 className="font-serif font-light text-4xl text-zinc-100 leading-tight uppercase tracking-wider">
              FROM THE DEPTHS OF DISCIPLINE
            </h3>
            
            <div className="space-y-6 text-zinc-400 text-sm leading-relaxed tracking-wide">
              <p>
                Inspired by quiet focus and uncompromised consistency, DR. KRONEN represents the silent obsession behind every great athletic performance.
              </p>
              <p>
                We reject standard, loud marketing campaigns. Real growth is achieved in silence, in early-morning training sessions and behind closed doors. We provide pure, raw tools for those who value patience and consistency above hype.
              </p>
              <p className="font-serif font-normal text-zinc-100 uppercase tracking-widest text-xs pt-2">
                Consistency. The rest follows.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://www.instagram.com/dr.kronenofficial?igsh=OGx5aHIxMWQxb3V3" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-zinc-800 hover:border-zinc-500 hover:text-zinc-100 text-zinc-300 transition-premium text-xs font-bold uppercase tracking-widest bg-zinc-900/30"
              >
                <InstagramIcon className="w-4 h-4 text-zinc-400" />
                Follow the Grind
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Athlete Visual Block (Sleek Frame) */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-2">
            <div 
              className="relative w-full max-w-[440px] rounded-lg overflow-hidden border border-zinc-800/80 group cursor-pointer" 
              onClick={() => onImageClick(modelPosterImg)}
            >
              <img 
                src={modelPosterImg} 
                alt="Dr. Kronen Athlete Focus representation" 
                className="w-full h-[480px] object-cover brightness-90 group-hover:brightness-100 transition-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="font-serif text-sm text-zinc-100 uppercase tracking-wider">THE ATHLETE'S GRIND</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2 font-mono">Continuous physical saturation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
