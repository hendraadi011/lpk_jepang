import React from 'react'
import headerImg from '../../../assets/portfolio/3.jpeg'
import news1 from '../../../assets/portfolio/1.jpeg'
import news2 from '../../../assets/portfolio/2.jpeg'
import news3 from '../../../assets/portfolio/3.jpeg'
import news4 from '../../../assets/portfolio/4.jpeg'

const dummyBerita = [
  {
    id: 1,
    title: 'Tips Sukses Belajar Bahasa Jepang di LPK',
    excerpt:
      'Pelajari strategi belajar efektif untuk menguasai bahasa Jepang dengan cepat...',
    image: news1,
    published_at: '10 Mar 2026',
    slug: 'tips-belajar-jepang-lpk',
  },
  {
    id: 2,
    title: 'LPK Jepang Membuka Program Karier Profesional',
    excerpt:
      'Program terbaru dari LPK Jepang mempersiapkan peserta menghadapi dunia kerja di Jepang...',
    image: news2,
    published_at: '08 Mar 2026',
    slug: 'program-karier-profesional-lpk',
  },
  {
    id: 3,
    title: 'Pengalaman Alumni LPK Jepang di Perusahaan Jepang',
    excerpt:
      'Bagaimana alumni LPK Jepang sukses bekerja di perusahaan Jepang ternama...',
    image: news3,
    published_at: '05 Mar 2026',
    slug: 'pengalaman-alumni-lpk-jepang',
  },
  {
    id: 4,
    title: 'Kegiatan Workshop Bahasa Jepang Bulan Ini',
    excerpt:
      'Workshop intensif yang diadakan oleh LPK Jepang untuk meningkatkan kemampuan bahasa...',
    image: news4,
    published_at: '01 Mar 2026',
    slug: 'workshop-bahasa-jepang-bulan-ini',
  },
  {
    id: 5,
    title: 'Kegiatan Workshop Bahasa Jepang Bulan Ini',
    excerpt:
      'Workshop intensif yang diadakan oleh LPK Jepang untuk meningkatkan kemampuan bahasa...',
    image: news4,
    published_at: '01 Mar 2026',
    slug: 'workshop-bahasa-jepang-bulan-ini',
  },
]

const Artikel = () => {
  return (
    <div className='bg-white'>
      {/* Header Section */}
      <div className='relative w-full h-80 md:h-96'>
        <img
          //   src={headerImg}
          alt='LPK Jepang'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6'>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>
            Berita & Artikel LPK Jepang
          </h1>
          <p className='text-white mt-4 text-lg md:text-xl max-w-2xl'>
            Dapatkan informasi terbaru tentang program, tips belajar, kegiatan,
            dan peluang karier di Jepang
          </p>
        </div>
      </div>

      {/* Artikel Section */}
      <div className='max-w-7xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {dummyBerita.map((item) => (
          <div
            key={item.id}
            className='bg-white rounded-xl border border-neutral-200  overflow-hidden hover:shadow-lg transition'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-full !h-48 object-cover'
            />
            <div className='p-6'>
              <span className='text-xs text-gray-500'>{item.published_at}</span>
              <h2 className='mt-2 text-lg font-bold text-gray-800 hover:text-green-600 transition'>
                {item.title}
              </h2>
              <p className='mt-2 text-gray-600 text-sm line-clamp-3'>
                {item.excerpt}
              </p>
              <a
                href={`/artikel/${item.slug}`}
                className='mt-4 inline-block text-green-600 font-semibold hover:underline'
              >
                Baca selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Artikel
