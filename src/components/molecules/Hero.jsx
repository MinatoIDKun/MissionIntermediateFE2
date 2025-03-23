import React from 'react';


function Hero() {

    return (
    <>
    <section className='mt-40'>
        <div className='w-7xl p-9 bg-other-primaryBackground rounded-xl px-35 pt-21 pb-16'
        style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("src/assets/images/d25fa2121b31a4ad14c9ebd02127f629.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <h1 className='text-center text-textLight-primary'>Revolusi Pembelajaran: Temukan 
                Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className='text-center text-textLight-primary my-6'>
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
                Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <button className='w-md h-14 justify-center mx-70 bg-primary-default rounded-xl text-textLight-primary font-bold text-lg'
            type="button">
                Temukan Video Course untuk Dipelajari!
            </button>
        </div>
    </section>
    </>
    )
}

export default Hero