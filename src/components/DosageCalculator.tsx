import { useState } from 'react'
import { Activity, Info, Minus, Plus } from 'lucide-react'
import { calculateDosage } from '@/utils/dosage'

export default function DosageCalculator() {
  const [weight, setWeight] = useState<number>(70)
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg')
  const [intensity, setIntensity] = useState<'moderate' | 'intense'>('intense')
  const [phase, setPhase] = useState<'loading' | 'maintenance'>('maintenance')

  const { dailyDosage, waterRequirement, formulaInfo } = calculateDosage(
    weight,
    weightUnit,
    intensity,
    phase
  )

  return (
    <section id="calculator" className="relative max-w-7xl mx-auto px-6 py-28 bg-dark-bg border-t border-zinc-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Descriptive info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 w-fit uppercase tracking-widest font-mono">
            <Activity className="w-3.5 h-3.5 text-zinc-500" />
            Calculator Module
          </div>
          
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-zinc-100 leading-tight uppercase tracking-wider">
            DOSAGE PROFILE
          </h2>
          
          <p className="text-zinc-500 text-sm leading-relaxed tracking-wide">
            Supplementation parameters calculated dynamically. Input your body metrics to determine recommended daily micronized intake and target hydration coefficients.
          </p>

          <div className="p-5 rounded-lg bg-zinc-900/40 border border-zinc-800 space-y-3">
            <div className="flex gap-2 items-center text-[10px] font-bold tracking-widest uppercase text-zinc-400 font-mono">
              <Info className="w-4 h-4 text-zinc-500" /> Hydration mandate
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed tracking-wide">
              Intracellular fluid absorption requires consistent hydration. Water targets prevent renal stress and maximize muscular volume retention.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive inputs and results */}
        <div className="lg:col-span-7 bg-zinc-900/10 border border-zinc-800 rounded-lg p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            
            {/* Weight inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Body Weight</label>
                  <span className="text-[10px] text-zinc-500 font-mono">{weight} {weightUnit}</span>
                </div>
                
                {/* Numeric Input with custom decrement / increment buttons & Unit Selector */}
                <div className="flex items-center rounded-lg bg-zinc-900 border border-zinc-800 p-1 mb-2">
                  <button 
                    onClick={() => setWeight((w) => Math.max(30, w - 1))}
                    className="p-2.5 text-zinc-500 hover:text-zinc-200 transition-premium cursor-pointer active:scale-90"
                    aria-label="Decrease Weight"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(Math.max(10, parseInt(e.target.value) || 0))}
                    className="w-full bg-transparent border-none outline-none px-2 py-2 text-zinc-100 font-serif font-bold text-lg text-center"
                    min="30"
                    max="440"
                  />
                  <button 
                    onClick={() => setWeight((w) => Math.min(440, w + 1))}
                    className="p-2.5 text-zinc-500 hover:text-zinc-200 transition-premium cursor-pointer active:scale-90 mr-2"
                    aria-label="Increase Weight"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <select 
                    value={weightUnit} 
                    onChange={(e) => setWeightUnit(e.target.value as 'kg' | 'lbs')}
                    className="bg-zinc-800 border-none outline-none rounded px-3 py-2 text-[10px] uppercase font-bold text-zinc-400 cursor-pointer"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min={weightUnit === 'kg' ? '40' : '90'}
                  max={weightUnit === 'kg' ? '200' : '440'}
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-300"
                />
              </div>

              {/* Intensity triggers */}
              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Workout Intensity</label>
                <div className="relative grid grid-cols-2 p-1 rounded-lg bg-zinc-900 border border-zinc-800">
                  {/* Sliding backdrop indicator */}
                  <div 
                    className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-zinc-800 rounded transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                    style={{
                      transform: intensity === 'moderate' ? 'translateX(0)' : 'translateX(100%)'
                    }}
                  />
                  <button 
                    onClick={() => setIntensity('moderate')}
                    className={`relative z-10 py-2 px-3 rounded text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-premium ${intensity === 'moderate' ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Moderate
                  </button>
                  <button 
                    onClick={() => setIntensity('intense')}
                    className={`relative z-10 py-2 px-3 rounded text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-premium ${intensity === 'intense' ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Gym / Lift
                  </button>
                </div>
              </div>
            </div>

            {/* Strategy Selectors */}
            <div className="space-y-3">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400">Schedule Strategy</label>
              <div className="relative grid grid-cols-2 p-1 rounded-lg bg-zinc-900 border border-zinc-800">
                {/* Sliding backdrop indicator */}
                <div 
                  className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-zinc-800 rounded transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                  style={{
                    transform: phase === 'maintenance' ? 'translateX(0)' : 'translateX(100%)'
                  }}
                />
                <button 
                  onClick={() => setPhase('maintenance')}
                  className={`relative z-10 py-3 rounded text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-premium ${phase === 'maintenance' ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  Maintenance
                </button>
                <button 
                  onClick={() => setPhase('loading')}
                  className={`relative z-10 py-3 rounded text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-premium ${phase === 'loading' ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  Loading Phase
                </button>
              </div>
            </div>

            {/* Dynamic Results Display */}
            <div className="border border-zinc-800/80 rounded-lg bg-zinc-900/30 p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6 divide-x divide-zinc-850">
                
                {/* Dosage Result */}
                <div className="space-y-2">
                  <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">Daily Dosage</span>
                  <div className="flex items-baseline gap-2">
                    <span key={dailyDosage} className="font-serif font-light text-4xl text-zinc-100 inline-block animate-scale-up">{dailyDosage}</span>
                    <span className="text-xs font-semibold text-zinc-400">grams</span>
                  </div>
                </div>

                {/* Hydration Result */}
                <div className="space-y-2 pl-6">
                  <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">Fluid Target</span>
                  <div className="flex items-baseline gap-2">
                    <span key={waterRequirement} className="font-serif font-light text-4xl text-zinc-100 inline-block animate-scale-up">{waterRequirement}</span>
                    <span className="text-xs font-semibold text-zinc-400">Liters</span>
                  </div>
                </div>

              </div>

              {/* Informative advice */}
              <div 
                key={formulaInfo}
                className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 p-4 rounded-lg leading-relaxed tracking-wide min-h-[50px] animate-fade-in"
              >
                {formulaInfo}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
