import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import g1 from '../../../assets/portfolio/1.jpeg'
import g2 from '../../../assets/portfolio/2.jpeg'
import g3 from '../../../assets/portfolio/3.jpeg'
import g4 from '../../../assets/portfolio/4.jpeg'
import g5 from '../../../assets/portfolio/5.jpeg'
import g6 from '../../../assets/portfolio/6.jpeg'
import g7 from '../../../assets/portfolio/7.jpeg'

import 'swiper/css'

export default function MainPage() {
  const stripeRef = useRef(null)

  useEffect(() => {
    const container = stripeRef.current

    const interval = setInterval(() => {
      const stripe = document.createElement('div')

      const width = Math.random() * 1
      const left = Math.random() * window.innerWidth
      const duration = Math.random() * 0.6 + 0.8

      stripe.className = 'stripe'
      stripe.style.left = left + 'px'
      stripe.style.width = width + 'px'
      stripe.style.animationDuration = duration + 's'

      container.appendChild(stripe)

      setTimeout(() => stripe.remove(), duration * 1000)
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const swiperConfig = {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
  }

  const images1 = [g1, g2, g3, g4]
  const images2 = [g7, g5, g6, g7]
  const images3 = [g3, g4, g6, g1]

  return (
    <section
      id='hero'
      className='relative overflow-hidden py-32 mt-20 bg-white'
    >
      {/* background */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='livewire-bg'></div>
      </div>

      <div
        id='stripes-container'
        className='absolute inset-0 overflow-hidden pointer-events-none'
      ></div>

      <div
        ref={stripeRef}
        className='absolute inset-0 overflow-hidden pointer-events-none'
        style={{ zIndex: 1 }}
      />

      <div className='relative z-10  mx-auto px-6 text-center max-w-6xl'>
        <h1 className='text-4xl md:text-6xl font-bold text-black leading-tight font-inter-3'>
          LPK Bahasa Jepang Profesional <br className='hidden md:block' />
          Wujudkan Impian Kerja di Jepang
        </h1>

        <p className='mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto'>
          Belajar dari dasar hingga mahir dengan kurikulum terstruktur, simulasi
          wawancara, dan bimbingan lengkap menuju dunia kerja Jepang.
        </p>

        <a
          href='#layanankami'
          className='inline-block mt-10 bg-red-600 border-t-2 border-red-300 px-8 py-3 rounded-lg font-semibold text-white hover:scale-105 transition shadow-lg'
        >
          Lihat Program
        </a>

        {/* IMAGE SWIPER */}
        <div className='mt-24 z-20 bg-slate-100 rounded-2xl border-t border-slate-100 p-6 space-y-6 overflow-hidden relative'>
          {/* glow */}
          <div className='pointer-events-none absolute inset-0 -z-10'>
            <div
              className='absolute bottom-56 left-1/2 -translate-x-1/2
              w-[700px] h-[400px]
              bg-gradient-to-tr from-red-200 via-red-200 to-pink-200
              opacity-30 blur-[140px] rounded-full'
            />
          </div>

          {/* ROW 1 */}
          <Swiper
            {...swiperConfig}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
          >
            {images1.map((img, i) => (
              <SwiperSlide
                key={i}
                className='!w-[230px] !h-[220px] rounded-xl overflow-hidden'
              >
                <img src={img} className='w-full !h-full object-cover' />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ROW 2 */}
          <Swiper {...swiperConfig}>
            {images2.map((img, i) => (
              <SwiperSlide
                key={i}
                className='!w-[230px] !h-[220px] rounded-xl overflow-hidden'
              >
                <img src={img} className='w-full !h-full object-cover' />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ROW 3 */}
          <Swiper
            {...swiperConfig}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
          >
            {images3.map((img, i) => (
              <SwiperSlide
                key={i}
                className='!w-[230px] !h-[220px] rounded-xl overflow-hidden'
              >
                <img src={img} className='w-full !h-full object-cover' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
