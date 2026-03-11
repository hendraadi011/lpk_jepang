import React from 'react'
import {
  IconBook,
  IconSchool,
  IconGlobe,
  IconBriefcase,
  IconUsers,
  IconAward,
  IconLanguage,
  IconBuilding,
} from '@tabler/icons-react'

const Program = () => {
  const program = [
    {
      nama_program: 'Pelatihan Bahasa Jepang Dasar',
      deskripsi:
        'Belajar hiragana, katakana, dan percakapan dasar bahasa Jepang.',
    },
    {
      nama_program: 'Persiapan Kerja di Jepang',
      deskripsi:
        'Pelatihan budaya kerja Jepang dan simulasi wawancara perusahaan Jepang.',
    },
    {
      nama_program: 'Program Tokutei Ginou',
      deskripsi:
        'Persiapan untuk bekerja di Jepang melalui jalur Tokutei Ginou.',
    },
  ]

  const icons = [
    IconBook,
    IconSchool,
    IconGlobe,
    IconBriefcase,
    IconUsers,
    IconAward,
    IconLanguage,
    IconBuilding,
  ]

  return (
    <section
      id='layanankami'
      className='py-24 bg-gradient-to-b from-red-50 to-white relative overflow-hidden'
    >
      {/* Heading */}
      <div className='text-center max-w-2xl mx-auto mb-16 px-6'>
        <h2 className='text-3xl md:text-5xl font-bold text-gray-800'>
          Program LPK Bahasa Jepang
        </h2>

        <p className='text-gray-600 mt-4 text-lg'>
          Pilihan program pelatihan profesional untuk mempersiapkan karier dan
          masa depan Anda di Jepang
        </p>
      </div>

      {/* Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6'>
        {program && program.length > 0 ? (
          program.map((item, index) => {
            const RandomIcon = icons[index % icons.length]

            return (
              <div
                key={index}
                className='group bg-white rounded-2xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden'
              >
                {/* Icon */}
                <div className='mb-6 flex justify-center'>
                  <div className='w-16 h-16 flex items-center justify-center rounded-2xl bg-red-500 text-white group-hover:scale-110 transition'>
                    <RandomIcon size={32} />
                  </div>
                </div>

                {/* Title */}
                <h4 className='text-xl font-semibold text-gray-800 mb-3 text-center'>
                  {item.nama_program}
                </h4>

                {/* Description */}
                <p className='text-gray-600 text-center leading-relaxed'>
                  {item.deskripsi}
                </p>

                {/* Gradient Hover */}
                <div className='absolute inset-0 bg-gradient-to-tr from-red-100 to-transparent opacity-0 group-hover:opacity-20 transition'></div>
              </div>
            )
          })
        ) : (
          <div className='col-span-3 text-center text-gray-500'>
            Belum ada program tersedia.
          </div>
        )}
      </div>
    </section>
  )
}

export default Program
