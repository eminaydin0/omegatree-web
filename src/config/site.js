/**
 * Tek kaynak: logo, bölüm kimlikleri ve ana menü (header + footer ile uyumlu).
 */

export const SITE = {
  name: 'OmegaTree',
  tagline: 'Doğanın Bilimle Buluştuğu Yer',
  copyrightYear: 2026,
  /** Projede bulunan logo dosyası (V1 yoksa V2 kullanın) */
  logoFile: 'OmegaTree_23Şubat_V2_Beyaz.jpg',
  logoFallback: 'logo-img.png',
}

/** Sayfa içi kaydırma hedefleri — bileşenlerdeki id ile aynı olmalı */
export const SECTION = {
  features: 'ozellikler',
  howItWorks: 'nasil-calisir',
  about: 'hakkimizda',
  contact: 'iletisim',
  work: 'work',
}

/** Header’da numaralı menü sırası */
export const NAV_ITEMS = [
  { id: 'home', href: '#', label: 'Ana Sayfa', num: '01' },
  { id: 'features', href: `#${SECTION.features}`, label: 'Özellikler', num: '02' },
  { id: 'how', href: `#${SECTION.howItWorks}`, label: 'Nasıl Çalışır?', num: '03' },
  { id: 'about', href: `#${SECTION.about}`, label: 'Hakkımızda', num: '04' },
  { id: 'contact', href: `#${SECTION.contact}`, label: 'İletişim', num: '05' },
]
