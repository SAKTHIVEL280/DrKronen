import type { ComponentType } from 'react'

export interface GalleryImage {
  src: string
  title: string
  desc: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface FeatureItem {
  id: number
  title: string
  description: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
}

export interface NavLink {
  href: string
  label: string
}
