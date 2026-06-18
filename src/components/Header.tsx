import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { InstagramIcon } from './Icons'

interface HeaderProps {
  logoImg: string
}

export default function Header({ logoImg }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'Philosophy' },
    { href: '#purity', label: 'The Purity' },
    { href: '#calculator', label: 'Dosage Calculator' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faqs', label: 'FAQs' }
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/85 backdrop-blur-md transition-premium">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo and Brand Name */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="Dr. Kronen Logo" 
            className="h-10 w-10 rounded-lg border border-zinc-800 group-hover:border-zinc-500 transition-premium"
          />
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-lg text-zinc-100 tracking-widest leading-none">DR. KRONEN</span>
            <span className="text-[9px] text-zinc-500 tracking-[0.3em] font-medium mt-1">BUILT IN SILENCE</span>
          </div>
        </a>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-zinc-400 hover:text-zinc-100 link-underline pb-1 transition-premium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/dr.kronenofficial?igsh=OGx5aHIxMWQxb3V3" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center justify-center p-3 rounded-lg border border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-zinc-100 transition-premium cursor-pointer"
            aria-label="Instagram Link"
          >
            <InstagramIcon className="w-4.5 h-4.5" />
          </a>

          <a 
            href="#shop" 
            className="hidden sm:inline-block px-6 py-3 rounded-lg text-xs font-bold bg-brand-blue hover:bg-blue-700 text-white tracking-widest uppercase transition-premium btn-luxury"
          >
            Order Now • ₹399
          </a>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-zinc-100 focus:outline-none transition-premium cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-zinc-950 border-b border-zinc-800 z-40 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-zinc-300 hover:text-zinc-100 text-sm font-semibold uppercase tracking-widest transition-premium border-b border-zinc-905 pb-3"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop"
            onClick={handleLinkClick}
            className="w-full text-center px-6 py-4 rounded-lg text-xs font-bold bg-brand-blue hover:bg-blue-700 text-white tracking-widest uppercase transition-premium btn-luxury"
          >
            Order Now • ₹399
          </a>
          <a
            href="https://www.instagram.com/dr.kronenofficial?igsh=OGx5aHIxMWQxb3V3" 
            target="_blank" 
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-zinc-800 text-zinc-350 text-xs font-bold uppercase tracking-widest transition-premium"
          >
            <InstagramIcon className="w-4 h-4" />
            Instagram
          </a>
        </nav>
      </div>
    </header>
  )
}
