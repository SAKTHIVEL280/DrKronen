import { FEATURE_ITEMS } from '@/constants'

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
          {FEATURE_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div 
                key={item.id}
                className="space-y-4 p-6 rounded-lg border border-zinc-900 bg-zinc-900/5 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 cursor-default group"
              >
                <div className="h-8 w-8 text-zinc-500 flex items-center justify-start transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-zinc-150 group-hover:scale-105">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif font-medium text-base text-zinc-200 uppercase tracking-widest transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-zinc-100">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed tracking-wide transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-zinc-400">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
