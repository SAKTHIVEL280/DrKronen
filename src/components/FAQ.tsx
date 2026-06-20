import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({
    0: true // Open first FAQ by default
  })

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const faqs = [
    {
      q: "Why is Dr. Kronen Creatine priced so honestly (₹399/- for 250g)?",
      a: "We operate on direct-to-consumer principles. Standard supplement labels allocate up to 60% of product margins to affiliate marketing, wholesale distributors, physical retail markups, and brand ambassadors. By bypassing intermediate distribution networks, we offer high-grade synthesis direct to athletes at the actual cost of chemistry."
    },
    {
      q: "How pure is Dr. Kronen Creatine? Does it contain additives?",
      a: "Our formula is 100% Raw Creatine Monohydrate. It contains zero fillers, sugar, artificial flavorings, or chemical flow agents. It is pharmaceutical-grade, micronized, and carries FSSAI Registration number 22426568000056."
    },
    {
      q: "Is it suitable for vegetarians and vegans?",
      a: "Yes. Dr. Kronen Creatine is synthesized from plant-derived raw materials and is completely vegan-friendly, carrying official vegetarian declaration credentials."
    },
    {
      q: "Should I do a Loading Phase?",
      a: "A loading strategy (20g daily split into 4 doses of 5g for 5-7 days) achieves complete muscular saturation inside one week. Alternatively, taking 3-5g daily (Maintenance Strategy) achieves equivalent saturation levels within 3-4 weeks. Use the dosage calculator to determine what fits your lifestyle."
    },
    {
      q: "How is delivery and payment handled?",
      a: "Clicking 'Order via WhatsApp' drafts a pre-compiled allocation request. Our operations desk will confirm shipping credentials, provide UPI transfer options, or confirm delivery scheduling. Standard shipping charges apply to all orders and will be confirmed during the verification process."
    }
  ]

  return (
    <section id="faqs" className="max-w-4xl mx-auto px-6 py-28">
      <div className="text-center mb-20">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.25em]">Inquiries</span>
        <h2 className="font-serif font-light text-4xl text-zinc-100 tracking-wider uppercase mt-3">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-zinc-500 text-sm mt-3 tracking-wide">
          General inquiries regarding Dr. Kronen creatine monohydrate synthesis.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/10 transition-premium"
          >
            <button 
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/30 transition-premium cursor-pointer"
            >
              <span className="font-serif font-medium text-base text-zinc-200 uppercase tracking-wider">
                {faq.q}
              </span>
              <ChevronDown 
                className={`w-4 h-4 text-zinc-500 transition-premium ${
                  faqOpen[index] ? 'rotate-180 text-zinc-350' : ''
                }`} 
              />
            </button>

            <div 
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                faqOpen[index] 
                  ? 'grid-rows-[1fr] opacity-100' 
                  : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-3 text-xs text-zinc-400 border-t border-zinc-900/60 bg-zinc-950/20 leading-relaxed tracking-wide">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
