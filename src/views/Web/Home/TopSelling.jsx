import React from 'react'

import p1 from '../../../assets/product/1.jpeg'
import p2 from '../../../assets/product/2.png'
import p3 from '../../../assets/product/3.avif'
import p4 from '../../../assets/product/4.jpeg'

const TopSelling = () => {
  const products = [
    { img: p1, name: 'Velvet Rose' },
    { img: p2, name: 'Midnight Oud' },
    { img: p3, name: 'Golden Amber' },
    // { img: p4, name: 'Royal Musk' },
  ]

  return (
    <section className='relative py-32 bg-g-1'>
      {/* Gradient Glow */}
      <div
        className='absolute left-1/2 -translate-x-1/2 top-64
        w-[500px] h-[220px]
        bg-[radial-gradient(ellipse_at_left,_#ff7a00,_transparent),radial-gradient(ellipse_at_right,_#ff2d95,_transparent)]
        blur-3xl opacity-70 rotate-45'
      />

      <div className='container mx-auto px-6 relative'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-black font-p-2'>
            Top Selling Parfum
          </h2>
          <p className='text-neutral-700 mt-2 font-p-2'>
            Parfum paling diminati pelanggan kami
          </p>
        </div>

        {/* Grid */}
        <div className='flex justify-center gap-5 items-center'>
          {products.map((item, i) => (
            <div
              key={i}
              className='group flex flex-col items-center justify-center'
            >
              {/* Oval Image */}
              <div
                className='w-[220px] h-[360px] md:w-[260px] md:h-[420px]
                rounded-[200px] overflow-hidden
                bg-cover bg-center
                transition duration-500
                group-hover:scale-105'
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Name */}
              <p className='text-black font-p-2 mt-6 text-lg font-medium text-center'>
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-20 max-w-3xl text-center mx-auto font-p-2'>
          <p className='text-neutral-700 leading-relaxed font-bold'>
            Setiap aroma memiliki cerita. Koleksi parfum kami dirancang untuk
            menghadirkan kesan elegan, mewah, dan berkarakter. Dengan perpaduan
            bahan berkualitas, setiap semprotan memberikan pengalaman wangi yang
            tahan lama dan meninggalkan kesan tak terlupakan.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TopSelling
