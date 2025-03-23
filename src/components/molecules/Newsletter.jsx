import React from 'react'

function Newsletter () {

  return (
    <section className=''>
        <div className='w-7xl px-100 py-10 bg-other-primaryBackground rounded-xl'
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("src/assets/images/cc34e79e1f52284620dbea34fb453966.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}> 
          <p className='text-center text-textLight-secondary'>
            Newsletter
          </p>
          <h3 className='text-center text-textLight-primary my-2.5'>
            Mau Belajar Lebih Banyak?
          </h3>
          <p className='text-center text-textLight-primary'>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
          </p>
          <input className='w-full h-14 justify-center mt-10 bg-other-primaryBackground rounded-xl text-textDark-secondary text-md margin '
          placeholder='Masukkan Emailmu'
          >
          </input>
          <button className='w-40 h-12 justify-center bg-secondary-default rounded-xl text-textLight-primary font-bold text-md margin '>
            Subscribe
          </button>
        </div>
    </section>
  )

}

export default Newsletter