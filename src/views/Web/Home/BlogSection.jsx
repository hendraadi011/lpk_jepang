import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const NewsPage = () => {
  const beritaPertama = {
    id: 1,
    title: 'LPK Jepang Membuka Program Magang Kerja ke Jepang Tahun 2026',
    slug: 'program-magang-jepang-2026',
    excerpt:
      'LPK Jepang membuka kesempatan bagi pemuda Indonesia untuk mengikuti program magang kerja di Jepang dengan berbagai bidang pekerjaan.',
    image: 'https://picsum.photos/900/500?1',
    published_at: '10 Mar 2026',
  }

  const beritaRandom = [
    {
      id: 2,
      title: 'Tips Lolos Interview Kerja di Jepang untuk Pemula',
      slug: 'tips-lolos-interview-jepang',
      image: 'https://picsum.photos/400/300?2',
    },
    {
      id: 3,
      title: 'Belajar Bahasa Jepang Dasar untuk Calon Pekerja',
      slug: 'belajar-bahasa-jepang',
      image: 'https://picsum.photos/400/300?3',
    },
    {
      id: 4,
      title: 'Gaji Pekerja Magang di Jepang Tahun 2026',
      slug: 'gaji-magang-jepang',
      image: 'https://picsum.photos/400/300?4',
    },
    {
      id: 5,
      title: 'Syarat Mengikuti Program Tokutei Ginou Jepang',
      slug: 'tokutei-ginou-jepang',
      image: 'https://picsum.photos/400/300?5',
    },
  ]

  const listBerita = [
    {
      id: 6,
      title: 'Cara Daftar LPK Jepang untuk Pemula',
      slug: 'cara-daftar-lpk',
      excerpt:
        'Banyak calon pekerja yang ingin bekerja di Jepang namun belum tahu bagaimana cara mendaftar LPK yang resmi.',
      image: 'https://picsum.photos/300/200?6',
      published_at: '08 Mar 2026',
    },
    {
      id: 7,
      title: 'Keuntungan Mengikuti Program Magang Jepang',
      slug: 'keuntungan-magang-jepang',
      excerpt:
        'Program magang Jepang memberikan banyak keuntungan mulai dari pengalaman kerja hingga penghasilan.',
      image: 'https://picsum.photos/300/200?7',
      published_at: '07 Mar 2026',
    },
    {
      id: 8,
      title: 'Tips Belajar Hiragana dan Katakana Cepat',
      slug: 'tips-belajar-hiragana',
      excerpt:
        'Belajar huruf Jepang menjadi langkah awal bagi calon pekerja yang ingin berkarir di Jepang.',
      image: 'https://picsum.photos/300/200?8',
      published_at: '06 Mar 2026',
    },
    {
      id: 9,
      title: 'Bidang Kerja Paling Banyak Dibutuhkan di Jepang',
      slug: 'bidang-kerja-jepang',
      excerpt:
        'Beberapa bidang kerja di Jepang sangat membutuhkan tenaga kerja dari luar negeri.',
      image: 'https://picsum.photos/300/200?9',
      published_at: '05 Mar 2026',
    },
  ]

  const beritaTerbaru = listBerita.slice(0, 3)

  const beritaPopuler = [
    {
      id: 10,
      title: 'Cara Kerja di Jepang Tanpa Pengalaman',
      slug: 'kerja-jepang-pemula',
      views: 1200,
    },
    {
      id: 11,
      title: 'Perbedaan Magang dan Tokutei Ginou',
      slug: 'magang-vs-tokutei',
      views: 980,
    },
  ]

  const tagPopuler = [
    { id: 1, name: 'lpk jepang', count: 12 },
    { id: 2, name: 'magang jepang', count: 10 },
    { id: 3, name: 'bahasa jepang', count: 8 },
    { id: 4, name: 'kerja jepang', count: 7 },
  ]
  return (
    <div className='py-15'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Heading */}
        <div className='text-center max-w-2xl mx-auto mb-16 px-6'>
          <h2 className='text-3xl md:text-5xl font-bold text-gray-800'>
            Berita & Informasi Terbaru
          </h2>

          <p className='text-gray-600 mt-4 text-lg'>
            Temukan informasi terbaru seputar program LPK Jepang, tips bekerja
            di Jepang, serta berbagai berita dan kegiatan terbaru dari kami.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* LEFT CONTENT */}
          <div className='lg:col-span-8 space-y-2 border border-neutral-200 rounded-xl'>
            {/* Berita Utama */}
            <div className='bg-white rounded-xl overflow-hidden'>
              <img
                src={beritaPertama.image}
                className='w-full h-96 object-cover'
              />

              <div className='p-6'>
                <span className='text-sm text-red-600 font-semibold'>
                  {beritaPertama.published_at}
                </span>

                <h2 className='text-2xl font-bold mt-2 hover:text-red-600'>
                  {beritaPertama.title}
                </h2>

                <p className='text-slate-600 mt-3 line-clamp-3'>
                  {beritaPertama.excerpt}
                </p>

                <button className='mt-4 text-red-600 font-semibold'>
                  Baca selengkapnya →
                </button>
              </div>
            </div>

            {/* Swiper */}
            <div className='px-6'>
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={24}
                loop
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {beritaRandom.map((item) => (
                  <SwiperSlide key={item.id}>
                    <article className='bg-white rounded-md overflow-hidden group'>
                      <img
                        src={item.image}
                        className='w-full h-48 object-cover group-hover:scale-105 transition'
                      />

                      <div className='p-3'>
                        <h3 className='font-bold text-sm line-clamp-2 hover:text-red-600'>
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* List Berita */}
            <div className='space-y-2'>
              {listBerita.map((item) => (
                <div
                  key={item.id}
                  className='flex gap-5 bg-white rounded-xl p-4'
                >
                  <img
                    src={item.image}
                    className='w-40 h-28 object-cover rounded-lg'
                  />

                  <div className='flex-1'>
                    <span className='text-xs text-slate-500'>
                      {item.published_at}
                    </span>

                    <h3 className='font-bold text-lg hover:text-red-600'>
                      {item.title}
                    </h3>

                    <p className='text-sm text-slate-600 line-clamp-2'>
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className='lg:col-span-4 space-y-6'>
            {/* Berita Terbaru */}
            <div className='bg-white rounded-xl p-5'>
              <h3 className='font-bold text-lg mb-4'>Berita Terbaru</h3>

              <ul className='space-y-3'>
                {beritaTerbaru.map((item) => (
                  <li key={item.id} className='flex gap-3'>
                    <img
                      src={item.image}
                      className='w-16 h-16 object-cover rounded'
                    />

                    <div>
                      <h4 className='text-sm font-semibold line-clamp-2 hover:text-red-600'>
                        {item.title}
                      </h4>

                      <span className='text-xs text-slate-500'>
                        {item.published_at}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Berita Populer */}
            <div className='bg-white rounded-xl p-5'>
              <h3 className='font-bold text-lg mb-4'>Berita Populer</h3>

              <ul className='space-y-3'>
                {beritaPopuler.map((item) => (
                  <li key={item.id} className='flex justify-between'>
                    <span className='text-sm font-semibold'>{item.title}</span>

                    <span className='text-xs text-slate-500'>
                      {item.views}x
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tag */}
            <div className='bg-white rounded-xl p-5'>
              <h3 className='font-bold text-lg mb-2'>Tag Populer</h3>

              <ul className='space-y-2'>
                {tagPopuler.map((tag) => (
                  <li key={tag.id}>
                    <div className='flex justify-between px-3 py-2 hover:bg-red-50 rounded'>
                      <div className='flex gap-2'>
                        <span className='text-red-600 font-bold'>#</span>
                        <span className='font-semibold'>{tag.name}</span>
                      </div>

                      <span className='text-xs text-gray-500'>{tag.count}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
