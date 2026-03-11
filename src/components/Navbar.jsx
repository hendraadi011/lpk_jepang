import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div
      className='fixed top-0 w-full z-50
      bg-white/60 backdrop-blur-xl backdrop-saturate-150
      border-b border-gray-200 transition-all duration-300'
    >
      {/* atas */}
      <div
        className='mx-auto flex items-center justify-center gap-2
        px-4 py-2 text-sm text-black font-bold
        bg-gradient-to-r from-red-500 via-white/90 via-red-500 to-red-600
        backdrop-blur-md'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='text-yellow-500'
        >
          <path d='M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11z' />
        </svg>
        Buruan Daftar Sekarang
      </div>

      {/* bawah */}
      <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3'>
        {/* logo */}
        <a href='/' className='flex items-center gap-2'>
          <div className='flex items-center justify-center w-9 h-9 bg-red-600 rounded-full shadow-md'>
            <span className='text-white font-bold'>J</span>
          </div>

          <div className='flex flex-col font-2'>
            <span className='text-gray-800 text-xl font-semibold -mb-1'>
              LPK JOSU
            </span>
            <span className='text-gray-500 text-sm'>INDONESIA</span>
          </div>
        </a>

        {/* tombol mobile */}
        <button
          onClick={toggleMenu}
          className='md:hidden p-2 rounded-md text-slate-500 hover:bg-gray-100'
        >
          {!open ? (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ) : (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>

        {/* menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-t border-gray-200
          md:static md:block md:w-auto md:border-0 md:bg-transparent
          ${open ? 'block' : 'hidden'}`}
        >
          <ul
            className='flex flex-col gap-2 p-4
            md:flex-row md:items-center md:gap-10 md:p-0'
          >
            <li>
              <a
                href='/'
                onClick={closeMenu}
                className='px-3 py-2 font-semibold text-gray-700 flex items-center gap-2 hover:text-red-400'
              >
                Home
              </a>
            </li>

            <li>
              <a
                href='/portfolio'
                onClick={closeMenu}
                className='px-3 py-2 font-semibold text-gray-700 flex items-center gap-2 hover:text-red-400'
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href='/artikel'
                onClick={closeMenu}
                className='px-3 py-2 font-semibold text-gray-700 flex items-center gap-2 hover:text-red-400'
              >
                Artikel
              </a>
            </li>

            <li className='pt-2 md:pt-0'>
              <a
                href='/form-pendaftaran'
                onClick={closeMenu}
                className='block text-center py-2 px-5 rounded-xl
                bg-red-600 text-white font-semibold hover:bg-red-700 transition'
              >
                Daftar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
