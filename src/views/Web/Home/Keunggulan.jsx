import React from 'react'
import {
  IconSchool,
  IconUsers,
  IconStarFilled,
  IconPlaneDeparture,
} from '@tabler/icons-react'

import { Counter } from './Counter'
import { ScrollParallax } from 'react-just-parallax'
import { motion } from 'framer-motion'

const Keunggulan = () => {
  const stats = [
    {
      icon: <IconSchool size={40} className='text-red-500' />,
      number: 10,
      suffix: '+',
      title: 'Tahun Pengalaman',
      desc: 'Berpengalaman melatih siswa bahasa Jepang hingga siap bekerja di Jepang',
    },
    {
      icon: <IconUsers size={40} className='text-red-500' />,
      number: 1200,
      suffix: '+',
      title: 'Siswa Dilatih',
      desc: 'Ratusan siswa telah mengikuti pelatihan bahasa dan budaya Jepang',
    },
    {
      icon: <IconPlaneDeparture size={40} className='text-red-500' />,
      number: 500,
      suffix: '+',
      title: 'Lulus ke Jepang',
      desc: 'Banyak alumni kami berhasil bekerja di perusahaan Jepang',
    },
    {
      icon: <IconStarFilled size={40} className='text-red-500' />,
      number: 98,
      suffix: '%',
      title: 'Tingkat Keberhasilan',
      desc: 'Program pelatihan kami memiliki tingkat keberhasilan yang tinggi',
    },
  ]

  return (
    <>
      <svg className='absolute w-0 h-0' xmlns='http://www.w3.org/2000/svg'>
        <filter id='bigGrain'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.15'
            numOctaves='2'
            stitchTiles='stitch'
          />
          <feColorMatrix
            type='matrix'
            values='
        3 0 0 0 -1
        0 3 0 0 -1
        0 0 3 0 -1
        0 0 0 1 0'
          />
          <feGaussianBlur stdDeviation='0.4' />
        </filter>
      </svg>

      <section className='relative py-52 overflow-hidden bg-white'>
        {/* Gradient Glow */}
        <div
          className='absolute left-1/2 -translate-x-1/2 top-64
        w-[500px] h-[220px]
        bg-[radial-gradient(ellipse_at_left,_#EF7D7D,_transparent),radial-gradient(ellipse_at_right,_#F19C4D,_transparent)]
        blur-3xl opacity-40 rotate-45'
        />

        <div className='relative container mx-auto px-6 text-center max-w-6xl'>
          <ScrollParallax>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-2xl lg:text-5xl font-bold mb-4 text-black font-inter-3'
            >
              Mengapa Memilih LPK Kami
            </motion.h2>

            <p className='text-neutral-600 max-w-2xl mx-auto mb-16 font-inter-5'>
              <b>LPK Bahasa Jepang terpercaya</b> yang membantu siswa belajar
              bahasa Jepang dari dasar hingga siap bekerja di Jepang melalui
              program pelatihan yang terstruktur dan bimbingan profesional.
            </p>

            {/* Stats Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
              {stats.map((item, index) => (
                <div
                  key={index}
                  className='bg-white/50 backdrop-blur-md border border-black/60 p-8 rounded-md hover:bg-white/10 transition duration-300'
                >
                  <div className='flex justify-center mb-4'>{item.icon}</div>

                  <h3 className='text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2'>
                    <Counter end={item.number} suffix={item.suffix} />
                  </h3>

                  <h4 className='font-semibold mb-2 text-black font-inter-3'>
                    {item.title}
                  </h4>

                  <p className='text-neutral-600 text-sm'>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollParallax>
        </div>
      </section>
    </>
  )
}

export default Keunggulan
