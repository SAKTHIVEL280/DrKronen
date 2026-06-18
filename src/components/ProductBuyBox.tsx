import { useState } from 'react'
import { MessageSquare, Minus, Plus, Check } from 'lucide-react'

interface ProductBuyBoxProps {
  productFrontImg: string
  productBackImg: string
  productLabelImg: string
  launchOfferImg: string
  onImageClick: (src: string) => void
}

export default function ProductBuyBox({
  productFrontImg,
  productBackImg,
  productLabelImg,
  launchOfferImg,
  onImageClick
}: ProductBuyBoxProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const [activeSpecTab, setActiveSpecTab] = useState<'benefits' | 'nutrition' | 'purity'>('benefits')
  const [activeProductImage, setActiveProductImage] = useState<string>(productFrontImg)

  const handleWhatsAppOrder = () => {
    const totalAmount = quantity * 399
    const originalAmount = quantity * 699
    const savings = originalAmount - totalAmount
    const whatsappText = `Hi Dr. Kronen! I want to order:\n\n🛍️ *Dr. Kronen Micronized Creatine Monohydrate (250g)*\n📦 *Quantity:* ${quantity} Units\n🔥 *Offer Price:* ₹399/unit (Original: ₹699)\n💰 *Total Amount:* ₹${totalAmount} (Saved: ₹${savings}!)\n\nPlease share the QR code or payment options and expected delivery details. Thank you!`
    const encodedText = encodeURIComponent(whatsappText)
    window.open(`https://wa.me/918903632501?text=${encodedText}`, '_blank')
  }

  return (
    <section id="shop" className="relative max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.25em]">Acquisition</span>
        <h2 className="font-serif font-light text-4xl text-zinc-100 tracking-wider uppercase mt-3">
          DIRECT ACQUISITION
        </h2>
        <p className="text-zinc-500 text-sm mt-3 tracking-wide">
          Direct chemical supply of premium micronized creatine monohydrate. No intermediate markup.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start bg-zinc-900/10 border border-zinc-800/80 rounded-lg p-6 sm:p-8 lg:p-12">
        
        {/* Left Column: Product Interactive Viewer */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group img-zoom-container bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 flex items-center justify-center min-h-[350px]">
            <img 
              key={activeProductImage}
              src={activeProductImage} 
              alt="Active Product View" 
              className="max-h-[380px] object-contain cursor-pointer filter brightness-95 animate-scale-up"
              onClick={() => onImageClick(activeProductImage)}
            />
            <div className="absolute top-4 left-4 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[8px] uppercase tracking-widest text-zinc-400 font-mono z-10">
              Batch #1
            </div>
          </div>

          {/* Thumbnail Selectors */}
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => setActiveProductImage(productFrontImg)}
              className={`p-2 rounded-lg border transition-premium flex flex-col items-center cursor-pointer hairline-hover ${activeProductImage === productFrontImg ? 'border-brand-blue bg-brand-blue/5' : 'border-zinc-850'}`}
            >
              <img src={productFrontImg} alt="Front View" className="h-14 object-contain" />
              <span className="text-[9px] uppercase tracking-widest font-medium text-zinc-500 mt-2">Front</span>
            </button>
            
            <button 
              onClick={() => setActiveProductImage(productBackImg)}
              className={`p-2 rounded-lg border transition-premium flex flex-col items-center cursor-pointer hairline-hover ${activeProductImage === productBackImg ? 'border-brand-blue bg-brand-blue/5' : 'border-zinc-850'}`}
            >
              <img src={productBackImg} alt="Back View" className="h-14 object-contain" />
              <span className="text-[9px] uppercase tracking-widest font-medium text-zinc-500 mt-2">Back</span>
            </button>

            <button 
              onClick={() => setActiveProductImage(productLabelImg)}
              className={`p-2 rounded-lg border transition-premium flex flex-col items-center cursor-pointer hairline-hover ${activeProductImage === productLabelImg ? 'border-brand-blue bg-brand-blue/5' : 'border-zinc-850'}`}
            >
              <img src={productLabelImg} alt="Nutritional Label" className="h-14 object-contain" />
              <span className="text-[9px] uppercase tracking-widest font-medium text-zinc-500 mt-2">Label</span>
            </button>
          </div>

          {/* Promotional Card Visual */}
          <div className="relative group img-zoom-container rounded-lg border border-zinc-800/80 mt-4 cursor-pointer" onClick={() => onImageClick(launchOfferImg)}>
            <img src={launchOfferImg} alt="Special launch banner" className="w-full h-auto object-cover brightness-90 transition-premium" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex flex-col justify-end p-5 z-10">
              <span className="text-[9px] uppercase text-zinc-400 tracking-[0.2em] font-semibold">Verification batch</span>
              <span className="text-zinc-200 text-xs tracking-wide mt-1">Direct laboratory synthesis allocation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Checkout Configurator */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              Available Allocation
            </span>
            
            <h3 className="font-serif font-light text-3xl sm:text-4xl text-zinc-100 uppercase tracking-wide">
              Micronized Creatine Monohydrate
            </h3>
            
            <p className="text-xs text-zinc-500 tracking-widest uppercase font-mono">
              Raw Unflavoured • 250g | 50 Servings
            </p>
          </div>

          {/* Clean Muted Pricing */}
          <div className="flex items-baseline gap-4 border-b border-zinc-800/80 pb-8">
            <span className="font-serif font-normal text-3xl sm:text-4xl text-zinc-100">
              ₹399
            </span>
            <span className="text-zinc-650 line-through text-base font-mono">
              ₹699
            </span>
            <span className="text-zinc-400 text-xs tracking-widest uppercase ml-2">
              Direct Synthesis Price
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Specify Quantity</label>
            <div className="flex items-center gap-6">
              <div className="flex items-center rounded-lg bg-zinc-900 border border-zinc-800 p-1">
                <button 
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="p-3 text-zinc-500 hover:text-zinc-200 transition-premium cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 font-mono font-bold text-zinc-200 text-base w-10 text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-zinc-500 hover:text-zinc-200 transition-premium cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              
              <div className="flex flex-col text-xs text-zinc-500 tracking-wide gap-1">
                <span>Subtotal: <strong className="text-zinc-300 font-mono">₹{quantity * 399}</strong></span>
                <span>Allocation: <strong className="text-zinc-300 font-mono">{quantity * 50} servings</strong></span>
              </div>
            </div>
          </div>

          {/* CTA Order Button */}
          <div className="space-y-6 pt-2">
            <button 
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-bold text-xs tracking-widest uppercase transition-premium btn-luxury cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Order Allocation via WhatsApp
            </button>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] text-zinc-500 tracking-widest uppercase">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-zinc-500" /> Free Shipping India</span>
              <span className="text-zinc-800">•</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-zinc-500" /> UPI / Cash Verification</span>
              <span className="text-zinc-800">•</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-zinc-500" /> WhatsApp Synthesis Update</span>
            </div>
          </div>

          {/* Interactive Spec Tabs (Architectural minimal sliding highlights) */}
          <div className="border border-zinc-800/80 rounded-lg overflow-hidden bg-zinc-900/10">
            <div className="relative flex border-b border-zinc-800 bg-zinc-900/30">
              {/* Smooth sliding backdrop and active indicator bar */}
              <div 
                className="absolute top-0 bottom-0 left-0 w-1/3 bg-zinc-800/40 border-b-2 border-zinc-300 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  transform: 
                    activeSpecTab === 'benefits' ? 'translateX(0)' :
                    activeSpecTab === 'nutrition' ? 'translateX(100%)' :
                    'translateX(200%)'
                }}
              />
              
              <button 
                onClick={() => setActiveSpecTab('benefits')}
                className={`relative z-10 flex-1 py-4 text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-premium ${activeSpecTab === 'benefits' ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Key Benefits
              </button>
              <button 
                onClick={() => setActiveSpecTab('nutrition')}
                className={`relative z-10 flex-1 py-4 text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-premium ${activeSpecTab === 'nutrition' ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Nutritional Facts
              </button>
              <button 
                onClick={() => setActiveSpecTab('purity')}
                className={`relative z-10 flex-1 py-4 text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-premium ${activeSpecTab === 'purity' ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Purity & Quality
              </button>
            </div>
            <div key={activeSpecTab} className="p-6 text-xs leading-relaxed text-zinc-400 tracking-wide min-h-[170px] animate-slide-up">
              {activeSpecTab === 'benefits' && (
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-650 mt-2"></span>
                    <span><strong>ATP Regeneration Support:</strong> Fuels muscle fibers during peak physical exertion periods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-650 mt-2"></span>
                    <span><strong>Intracellular Hydration:</strong> Promotes cellular fluid retention without subcutaneous swelling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-650 mt-2"></span>
                    <span><strong>Micronized mixability:</strong> Processed to a fine mesh to avoid settling or grittiness.</span>
                  </li>
                </ul>
              )}

              {activeSpecTab === 'nutrition' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 border-b border-zinc-800 pb-2 text-[9px] uppercase tracking-wider font-semibold text-zinc-500">
                    <span>Component details (per 5g)</span>
                    <span className="text-right">Quantity</span>
                  </div>
                  <div className="space-y-3 font-mono text-[11px]">
                    <div className="flex justify-between border-b border-zinc-900 py-1">
                      <span className="text-zinc-200">Creatine Monohydrate</span>
                      <span className="text-zinc-200 font-bold">5000 mg</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 py-1">
                      <span>Energy</span>
                      <span>0 kcal</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 py-1">
                      <span>Protein</span>
                      <span>0 g</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 py-1">
                      <span>Carbohydrates / Fat / Sodium</span>
                      <span>0 g</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-zinc-500 italic mt-2 font-sans">
                    *Packaged & Marketed by: Dr. Kronen. Anna Nagar, Erode, Tamilnadu - 638008.
                  </div>
                </div>
              )}

              {activeSpecTab === 'purity' && (
                <div className="space-y-4">
                  <p>
                    Dr. Kronen stands for patience, discipline, and uncompromising quality. Each chemical batch undergoes strict laboratory verification:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-[11px]">
                    <div className="p-3 rounded bg-zinc-900 border border-zinc-800">
                      <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1 font-sans">FSSAI Number</span>
                      <span className="text-zinc-305">22426568000056</span>
                    </div>
                    <div className="p-3 rounded bg-zinc-900 border border-zinc-800">
                      <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1 font-sans">Purity Grade</span>
                      <span className="text-zinc-305">Pharmaceutical Standard</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Integrated Minimal Certifications Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-800 pt-8 mt-4 text-[10px] text-zinc-500 tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600"></span>
              <span>100% Vegetarian</span>
            </div>
            <div>FSSAI Certified</div>
            <div>Laboratory Verified</div>
          </div>

        </div>

      </div>
    </section>
  )
}
