import React from 'react'
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandWhatsapp,
  IconMapPin,
  IconPhone,
  IconMail,
} from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer className='relative bg-gray-900 text-gray-300 overflow-hidden'>
      <div className='max-w-screen-xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-3 gap-12'>
          {/* Logo & Deskripsi */}
          <div>
            <a
              href='/'
              className='flex items-center gap-3 text-white font-bold text-2xl mb-6'
            >
              <div className='flex items-center justify-center w-9 h-9 bg-red-600 rounded-full shadow-md group-hover:scale-105 transition'>
                <span className='text-white text-lg font-bold'>J</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-gray-100 font-2 text-xl -mb-1'>
                  LPK JOSU
                </span>
                <span className='text-gray-300 font-2 text-sm'>INDONESIA</span>
              </div>
            </a>

            <p className='text-gray-400 leading-relaxed mb-6'>
              Lembaga Pelatihan Kerja Bahasa Jepang yang fokus pada pelatihan
              bahasa, budaya kerja Jepang, dan persiapan kerja hingga siap
              berkarier di Jepang 🇯🇵.
            </p>

            <div className='flex gap-4 text-xl'>
              <a href='#' className='hover:text-red-500 transition'>
                <IconBrandInstagram size={24} />
              </a>
              <a href='#' className='hover:text-red-500 transition'>
                <IconBrandFacebook size={24} />
              </a>
              <a href='#' className='hover:text-red-500 transition'>
                <IconBrandYoutube size={24} />
              </a>
              <a
                href='https://wa.me/6285784242714'
                className='hover:text-green-400 transition'
              >
                <IconBrandWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className='text-white text-lg font-semibold mb-6'>Navigasi</h4>
            <ul className='space-y-4'>
              <li>
                <a href='/' className='hover:text-red-400 transition'>
                  Home
                </a>
              </li>
              <li>
                <a href='#program' className='hover:text-red-400 transition'>
                  Program
                </a>
              </li>
              <li>
                <a href='#tentang' className='hover:text-red-400 transition'>
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href='#galeri' className='hover:text-red-400 transition'>
                  Galeri
                </a>
              </li>
              <li>
                <a href='#kontak' className='hover:text-red-400 transition'>
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className='text-white text-lg font-semibold mb-6'>
              Kontak Kami
            </h4>
            <ul className='space-y-4 text-gray-400'>
              <li className='flex items-start gap-3'>
                <IconMapPin className='text-red-500' size={24} />
                <span>Jl. Contoh No. 123, Tulungagung, Jawa Timur</span>
              </li>
              <li className='flex items-center gap-3'>
                <IconPhone className='text-red-500' size={24} />
                <span>+62 857 8424 2714</span>
              </li>
              <li className='flex items-center gap-3'>
                <IconMail className='text-red-500' size={24} />
                <span>info@lpksakura.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='border-t border-gray-800 py-6 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} LPK Sakura Nihongo. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
