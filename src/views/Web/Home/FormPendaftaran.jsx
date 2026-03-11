import React, { useState } from 'react'

const FormPendaftaran = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    program: '',
    pesan: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Data Dikirim:', formData)
    alert('Terima kasih, pendaftaran Anda telah diterima!')
    setFormData({ nama: '', email: '', telepon: '', program: '', pesan: '' })
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4 py-32 relative'>
      {/* Gradient Glow */}
      <div
        className='absolute left-1/2 -translate-x-1/2 top-64
        w-[500px] h-[220px]
        bg-[radial-gradient(ellipse_at_left,_#EF7D7D,_transparent),radial-gradient(ellipse_at_right,_#F19C4D,_transparent)]
        blur-3xl opacity-10 rotate-45'
      />

      <div className='w-full max-w-2xl bg-white/50 backdrop-blur-md rounded-xl border border-neutral-200 p-8'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-red-600 mb-2'>
            Form Pendaftaran
          </h2>
          <p className='text-gray-600'>
            Isi data diri Anda untuk mengikuti program pelatihan bahasa Jepang
            kami.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Nama */}
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='nama'>
              Nama Lengkap
            </label>
            <input
              type='text'
              name='nama'
              id='nama'
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder='Masukkan nama lengkap'
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600'
            />
          </div>

          {/* Email */}
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Masukkan email'
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600'
            />
          </div>

          {/* Telepon */}
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='telepon'>
              No. Telepon
            </label>
            <input
              type='tel'
              name='telepon'
              id='telepon'
              value={formData.telepon}
              onChange={handleChange}
              required
              placeholder='Masukkan nomor telepon'
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600'
            />
          </div>

          {/* Program */}
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='program'>
              Pilih Program
            </label>
            <select
              name='program'
              id='program'
              value={formData.program}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600'
            >
              <option value='' disabled>
                Pilih program
              </option>
              <option value='Bahasa Jepang Dasar'>Bahasa Jepang Dasar</option>
              <option value='Bahasa Jepang Menengah'>
                Bahasa Jepang Menengah
              </option>
              <option value='Persiapan Kerja di Jepang'>
                Persiapan Kerja di Jepang
              </option>
              <option value='Budaya & Etika Kerja Jepang'>
                Budaya & Etika Kerja Jepang
              </option>
            </select>
          </div>

          {/* Pesan */}
          <div>
            <label className='block text-gray-700 mb-2' htmlFor='pesan'>
              Pesan / Catatan
            </label>
            <textarea
              name='pesan'
              id='pesan'
              value={formData.pesan}
              onChange={handleChange}
              placeholder='Masukkan pesan tambahan (opsional)'
              className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none'
              rows={4}
            ></textarea>
          </div>

          {/* Submit */}
          <div className='text-center'>
            <button
              type='submit'
              className='bg-red-600 hover:bg-red-700 w-full text-white font-semibold px-6 py-3 rounded-md transition-all'
            >
              Daftar Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormPendaftaran
