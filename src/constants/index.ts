import { ShieldCheck, TrendingUp, Sparkles } from 'lucide-react'
import { DumbbellIcon } from '@/components/ui/Icons'

// Visual Assets Imports
import logoImg from '@/assets/images/logo.png'
import productFrontImg from '@/assets/images/product-front.png'
import productFrontWithBackdropImg from '@/assets/images/product-front-backdrop.png'
import productBackImg from '@/assets/images/product-back.png'
import productLabelImg from '@/assets/images/product-label.png'
import threeTubsDarkImg from '@/assets/images/three-tubs-dark.png'
import modelPosterImg from '@/assets/images/model-poster.png'
import lightningPosterImg from '@/assets/images/lightning-poster.png'
import waterSplashPosterImg from '@/assets/images/water-splash-poster.png'
import affordablePosterImg from '@/assets/images/affordable-poster.png'
import launchOfferImg from '@/assets/images/launch-offer.png'
import twoTubsGreyImg from '@/assets/images/two-tubs-grey.png'
import gymMockupImg from '@/assets/images/gym-mockup.png'
import iceMockupImg from '@/assets/images/ice-mockup.png'
import whyChooseImg from '@/assets/images/why-choose.png'
import deserveBlueImg from '@/assets/images/deserve-blue.png'

// Types
import type { NavLink, FAQItem, FeatureItem, GalleryImage } from '@/types'

export const IMAGES = {
  logo: logoImg,
  productFront: productFrontImg,
  productFrontBackdrop: productFrontWithBackdropImg,
  productBack: productBackImg,
  productLabel: productLabelImg,
  threeTubsDark: threeTubsDarkImg,
  modelPoster: modelPosterImg,
  lightningPoster: lightningPosterImg,
  waterSplashPoster: waterSplashPosterImg,
  affordablePoster: affordablePosterImg,
  launchOffer: launchOfferImg,
  twoTubsGrey: twoTubsGreyImg,
  gymMockup: gymMockupImg,
  iceMockup: iceMockupImg,
  whyChoose: whyChooseImg,
  deserveBlue: deserveBlueImg,
}

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'Philosophy' },
  { href: '#purity', label: 'The Purity' },
  { href: '#calculator', label: 'Dosage Calculator' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faqs', label: 'FAQs' }
]

export const PRODUCT_CONFIG = {
  name: "Micronized Creatine Monohydrate",
  subtitle: "Raw Unflavoured • 250 grams | 50 Servings",
  price: 399,
  originalPrice: 699,
  fssaiRegNo: "22426568000056"
}

export const CONTACT_DETAILS = {
  whatsappNumber: "918903632501",
  whatsappDisplay: "+91-8903632501",
  email: "dr.kronenofficial@gmail.com",
  address: {
    name: "DR. KRONEN",
    line1: "Kalamani residency, Anna nagar, Erode,",
    line2: "Tamilnadu - 638008"
  },
  instagramUrl: "https://www.instagram.com/dr.kronenofficial?igsh=OGx5aHIxMWQxb3V3"
}

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 1,
    title: "100% Raw Purity",
    description: "Zero added sucrose, artificial coloring, or silicon dioxide fillers. Pure laboratory synthesis micronized creatine monohydrate.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Honest Costing",
    description: "We price each unit at the true, uninflated valuation of chemical synthesis. You acquire the direct asset, not marketing fluff.",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Micronized Mixability",
    description: "Engineered using advanced micro-milling synthesis to reduce particle sizes for optimal suspension and mixability.",
    icon: Sparkles
  },
  {
    id: 4,
    title: "Thoroughly Researched",
    description: "Creatine Monohydrate remains the single most rigorously examined athletic supplement globally, backed by robust clinical trials.",
    icon: DumbbellIcon
  }
]

export const FAQ_ITEMS: FAQItem[] = [
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

export const GALLERY_IMAGES: GalleryImage[] = [
  { 
    src: lightningPosterImg, 
    title: "Built in Silence (Dark Theme)", 
    desc: "Representing the dedication of training behind closed doors." 
  },
  { 
    src: waterSplashPosterImg, 
    title: "Pure & Potent (Light Splash)", 
    desc: "Highlighting raw pharmaceutical-grade micronized purity." 
  },
  { 
    src: gymMockupImg, 
    title: "Hard Work Refined", 
    desc: "No shortcuts. No additives. Pure fuel for muscle strength." 
  },
  { 
    src: iceMockupImg, 
    title: "Wet & Crisp Reflection", 
    desc: "Formulated for instant solubility and recovery support." 
  },
  { 
    src: affordablePosterImg, 
    title: "Top Quality, Honest Price", 
    desc: "Direct to consumer. Cutting out middleman markups." 
  },
  { 
    src: deserveBlueImg, 
    title: "Purest Creatine Deserved", 
    desc: "Uncompromised quality standards for elite athletes." 
  },
  { 
    src: twoTubsGreyImg, 
    title: "Raw & Unflavoured", 
    desc: "Clean label formula without fillers or added sugars." 
  }
]
