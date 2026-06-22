import { Phone, Mail, MapPin } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/Icons'
import { IMAGES, CONTACT_DETAILS, PRODUCT_CONFIG, NAV_LINKS } from '@/constants'

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/80 pt-20 pb-12 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-800 pb-16">
        
        {/* Col 1: Brand details */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="Dr. Kronen Logo" className="h-10 w-10 rounded-lg border border-zinc-850" />
            <span className="font-serif font-semibold text-lg text-zinc-150 tracking-widest uppercase">DR. KRONEN</span>
          </div>
          <p className="text-zinc-500 leading-relaxed max-w-sm tracking-wide">
            Dr. Kronen is dedicated to athletic performance, chemical purity, and direct costing. Synthesized and packaged in India.
          </p>
          <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
            FSSAI Reg No: {PRODUCT_CONFIG.fssaiRegNo}
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="font-serif font-semibold text-zinc-200 uppercase tracking-widest">Useful Links</h5>
          <ul className="space-y-3 text-zinc-500">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-zinc-100 transition-premium">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href={CONTACT_DETAILS.instagramUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-zinc-100 transition-premium"
              >
                Official Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact details */}
        <div className="md:col-span-5 space-y-4">
          <h5 className="font-serif font-semibold text-zinc-200 uppercase tracking-widest">Contact & Support</h5>
          <ul className="space-y-4 text-zinc-500">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-zinc-650 shrink-0" strokeWidth={1.5} />
              <span>WhatsApp Support: <strong className="text-zinc-350 font-mono">{CONTACT_DETAILS.whatsappDisplay}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-zinc-650 shrink-0" strokeWidth={1.5} />
              <span>Customer care: <strong className="text-zinc-350 font-mono">{CONTACT_DETAILS.email}</strong></span>
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <MapPin className="w-4 h-4 text-zinc-650 shrink-0" strokeWidth={1.5} />
              <span>Packaged and Marketed by: <br />
              <strong className="text-zinc-350">{CONTACT_DETAILS.address.name}</strong><br />
              {CONTACT_DETAILS.address.line1}<br />
              {CONTACT_DETAILS.address.line2}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Disclaimers & Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-zinc-600 tracking-wide">
        <div className="space-y-2 max-w-xl text-center md:text-left leading-relaxed">
          <p className="font-mono">
            © {new Date().getFullYear()} Dr. Kronen Nutrition. All Rights Reserved. Built In Silence.
          </p>
        </div>
        
        <div className="flex gap-4">
          <a 
            href={CONTACT_DETAILS.instagramUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="text-zinc-600 hover:text-zinc-300 transition-premium"
            aria-label="Instagram link"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
