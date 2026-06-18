import { ShieldCheck, TrendingUp, Sparkles } from 'lucide-react'
import { DumbbellIcon } from './Icons'

export default function Features() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-6 py-28 bg-dark-bg border-t border-zinc-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Editorial Philosophy */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.25em]">
            Philosophy
          </span>
          
          <h2 className="font-serif font-light text-4xl text-zinc-100 leading-tight uppercase tracking-wider">
            WHY DR. KRONEN?
          </h2>
          
          <p className="text-zinc-500 text-sm leading-relaxed tracking-wide">
            We operate in silence. We bypass expensive advertising budgets, executive offices, and endorsement markups to allocate resource value directly to formulation purity.
          </p>

          <blockquote className="border-l border-zinc-600 pl-4 py-1 text-xs italic text-zinc-400 tracking-wide">
            "Direct access to pure chemical formulation. Fair, uninflated cost."
          </blockquote>
        </div>

        {/* Right Column: Grid Columns with Hairlines */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
          
          {/* Feature 1 */}
          <div className="space-y-4">
            <div className="h-8 w-8 text-zinc-500 flex items-center justify-start">
              <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif font-medium text-base text-zinc-200 uppercase tracking-widest">100% Raw Purity</h4>
            <p className="text-zinc-500 text-xs leading-relaxed tracking-wide">
              Zero added sucrose, artificial coloring, or silicon dioxide fillers. Pure laboratory synthesis micronized creatine monohydrate.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4">
            <div className="h-8 w-8 text-zinc-500 flex items-center justify-start">
              <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif font-medium text-base text-zinc-200 uppercase tracking-widest">Honest Costing</h4>
            <p className="text-zinc-500 text-xs leading-relaxed tracking-wide">
              We price each unit at the true, uninflated valuation of chemical synthesis. You acquire the direct asset, not marketing fluff.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-4">
            <div className="h-8 w-8 text-zinc-500 flex items-center justify-start">
              <Sparkles className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif font-medium text-base text-zinc-200 uppercase tracking-widest">Micronized Mixability</h4>
            <p className="text-zinc-500 text-xs leading-relaxed tracking-wide">
              Engineered using advanced micro-milling synthesis to reduce particle sizes for optimal suspension and mixability.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="space-y-4">
            <div className="h-8 w-8 text-zinc-500 flex items-center justify-start">
              <DumbbellIcon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h4 className="font-serif font-medium text-base text-zinc-200 uppercase tracking-widest">Thoroughly Researched</h4>
            <p className="text-zinc-500 text-xs leading-relaxed tracking-wide">
              Creatine Monohydrate remains the single most rigorously examined athletic supplement globally, backed by robust clinical trials.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
