import { useEffect, useState } from 'react'

export default function IntroLoader() {
  const [step, setStep] = useState<'idle' | 'fadeIn' | 'fadeOut' | 'hidden'>(() => {
    try {
      const hasLoaded = sessionStorage.getItem('dr_kronen_intro_loaded')
      return hasLoaded === 'true' ? 'hidden' : 'idle'
    } catch {
      return 'idle'
    }
  })

  useEffect(() => {
    let hasLoaded = false
    try {
      hasLoaded = sessionStorage.getItem('dr_kronen_intro_loaded') === 'true'
    } catch {
      // Ignored
    }

    if (hasLoaded) return

    // Step 1: Fade in brand titles
    const fadeTimer = setTimeout(() => setStep('fadeIn'), 300)
    
    // Step 2: Begin fade out of the backdrop overlay
    const fadeOutTimer = setTimeout(() => setStep('fadeOut'), 2200)
    
    // Step 3: Remove loader overlay from layout DOM and mark as loaded
    const removeTimer = setTimeout(() => {
      setStep('hidden')
      try {
        sessionStorage.setItem('dr_kronen_intro_loaded', 'true')
      } catch {
        // Ignored
      }
    }, 3200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(fadeOutTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (step === 'hidden') return null

  return (
    <div
      className={`fixed inset-0 z-[200] bg-dark-bg flex flex-col items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        step === 'fadeOut' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center select-none">
        
        {/* Brand Title: Dynamic tracking expansion & slow opacity ease */}
        <h1 
          className={`font-serif font-light text-xl sm:text-2xl text-zinc-150 uppercase transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            step === 'fadeIn' 
              ? 'opacity-100 tracking-[0.45em]' 
              : 'opacity-0 tracking-[0.1em]'
          }`}
        >
          DR. KRONEN
        </h1>

        {/* Brand Tagline: Styled quiet, lagging slightly behind title */}
        <span 
          className={`text-[8px] text-zinc-500 uppercase transition-all duration-[2400ms] ease-[cubic-bezier(0.16,1,0.3,1)] mt-3 ${
            step === 'fadeIn' 
              ? 'opacity-100 tracking-[0.3em]' 
              : 'opacity-0 tracking-[0.05em]'
          }`}
        >
          BUILT IN SILENCE
        </span>

      </div>
    </div>
  )
}
