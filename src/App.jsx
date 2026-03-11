import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import RoutesIndex from './routes'

// ===== Brand Dinamis =====
const getBrandName = () => {
  const host = window.location.hostname
  const parts = host.split('.')

  // localhost / IP
  if (host === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    return 'Budalumroh Travel'
  }

  // domain utama
  if (host === 'budalumroh.com') {
    return 'Budalumroh Travel'
  }

  // subdomain
  if (parts.length >= 3) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + ' Travel'
  }

  return 'Budalumroh Travel'
}

// ===== Helper Meta =====
function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setOGTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function App() {
  useEffect(() => {
    const brand = getBrandName()
    const url = window.location.origin
    const ogImage = `${url}/images/og-umroh.jpg` // ganti dengan og image paket Umroh

    // ===== Title (SEO Intent Umroh) =====
    document.title = `${brand} | Paket Umroh & Travel Muslimah`

    // ===== Description =====
    setMetaTag(
      'description',
      `${brand} menyediakan paket Umroh & Travel Muslimah berkualitas. Pilih tanggal keberangkatan, durasi, dan fasilitas premium. Booking mudah & terpercaya.`
    )

    // ===== Keywords =====
    setMetaTag(
      'keywords',
      `
      paket umroh,
      travel umroh,
      umroh plus turki,
      jadwal umroh,
      booking umroh,
      travel muslimah,
      paket ibadah haji,
      ${brand}
      `
    )

    // ===== Robots =====
    setMetaTag('robots', 'index, follow')

    // ===== Open Graph (WA / Facebook) =====
    setOGTag('og:title', `${brand} | Paket Umroh & Travel Muslimah`)
    setOGTag(
      'og:description',
      `Temukan paket Umroh dengan fasilitas premium, jadwal fleksibel, dan layanan terpercaya bersama ${brand}.`
    )
    setOGTag('og:image', ogImage)
    setOGTag('og:url', url)
    setOGTag('og:type', 'website')

    // ===== Twitter Card =====
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', `${brand} | Paket Umroh & Travel Muslimah`)
    setMetaTag(
      'twitter:description',
      `Booking paket Umroh & Travel Muslimah berkualitas dengan layanan terbaik dan fasilitas premium.`
    )
    setMetaTag('twitter:image', ogImage)

    // ===== Canonical =====
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [])

  return (
    <>
      <Toaster />
      <RoutesIndex />
    </>
  )
}

export default App
