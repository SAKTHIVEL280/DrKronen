export interface DosageResult {
  dailyDosage: number
  waterRequirement: number
  formulaInfo: string
}

/**
 * Calculates the dynamic recommended daily creatine dosage and target hydration requirement.
 * 
 * @param weight - Body weight value
 * @param weightUnit - Unit of weight ('kg' or 'lbs')
 * @param intensity - Workout intensity ('moderate' or 'intense')
 * @param phase - Supplementation strategy phase ('loading' or 'maintenance')
 */
export function calculateDosage(
  weight: number,
  weightUnit: 'kg' | 'lbs',
  intensity: 'moderate' | 'intense',
  phase: 'loading' | 'maintenance'
): DosageResult {
  const weightInKg = weightUnit === 'lbs' ? weight * 0.453592 : weight

  let dailyDosage: number
  let waterRequirement: number
  let formulaInfo: string

  if (phase === 'loading') {
    dailyDosage = 20
    waterRequirement = 5.0
    formulaInfo = 'Loading Strategy: Saturate your muscles quickly by taking 20g daily, split into 4 servings of 5g (Morning, Pre-Workout, Post-Workout, Evening) for 5-7 days.'
  } else {
    // Continuous scientific scaling: 0.05g/kg for moderate, 0.07g/kg for intense gym sessions
    const multiplier = intensity === 'intense' ? 0.07 : 0.05
    dailyDosage = weightInKg * multiplier
    
    // Clamp values between 3g and 10g for safety and practicality, round to 1 decimal place
    dailyDosage = Math.round(Math.max(3, Math.min(10, dailyDosage)) * 10) / 10

    // Hydration: base fluid requirements (0.05L per kg weight) + exercise factor
    const baseHydration = weightInKg * 0.05
    const intensityAddon = intensity === 'intense' ? 0.5 : 0
    waterRequirement = baseHydration + intensityAddon
    
    // Clamp water target between 3L and 6L, round to 1 decimal place
    waterRequirement = Math.round(Math.max(3, Math.min(6, waterRequirement)) * 10) / 10

    formulaInfo = `Maintenance Strategy (Science-scaled): Take ${dailyDosage}g of micronized creatine monohydrate once daily (ideally post-workout) combined with a carbohydrate carrier to optimize muscle uptake.`
  }

  return { dailyDosage, waterRequirement, formulaInfo }
}
