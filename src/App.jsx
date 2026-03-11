import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import RoutesIndex from './routes'

// ===== Brand Dinamis =====
const getBrandName = () => {
  const host = window.location.hostname
  const parts = host.split('.')

  // localhost / IP
  if (host === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    return 'LPK Sakura Nihongo'
  }

  // domain utama
  if (host === 'lpkjosu.com') {
    return 'LPK JOSU Indonesia'
  }

  // subdomain
  if (parts.length >= 3) {
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + ' LPK Jepang'
  }

  return 'LPK JOSU Indonesia'
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
    const ogImage = `${url}/images/og-jepang.jpg`

    // ===== Title (SEO LPK Jepang) =====
    document.title = `${brand} | LPK Jepang & Pelatihan Kerja ke Jepang`

    // ===== Description =====
    setMetaTag(
      'description',
      `${brand} adalah Lembaga Pelatihan Kerja Bahasa Jepang yang membantu persiapan kerja ke Jepang. Program pelatihan bahasa Jepang, budaya kerja Jepang, dan penyaluran kerja resmi ke Jepang.`
    )

    // ===== Keywords =====
    setMetaTag(
      'keywords',
      `
      lpk jepang,
      kerja ke jepang,
      pelatihan bahasa jepang,
      sekolah bahasa jepang,
      program magang jepang,
      tokutei ginou,
      training kerja jepang,
      kursus bahasa jepang,
      lembaga pelatihan kerja jepang,
      ${brand}
      `
    )

    // ===== Robots =====
    setMetaTag('robots', 'index, follow')

    // ===== Open Graph (WA / Facebook) =====
    setOGTag('og:title', `${brand} | LPK Jepang & Kerja ke Jepang`)
    setOGTag(
      'og:description',
      `Belajar bahasa Jepang dan persiapan kerja di Jepang bersama ${brand}. Program pelatihan profesional dengan peluang kerja di Jepang.`
    )
    setOGTag('og:image', ogImage)
    setOGTag('og:url', url)
    setOGTag('og:type', 'website')

    // ===== Twitter Card =====
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', `${brand} | LPK Jepang & Kerja ke Jepang`)
    setMetaTag(
      'twitter:description',
      `Program pelatihan bahasa Jepang dan persiapan kerja di Jepang bersama ${brand}.`
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
