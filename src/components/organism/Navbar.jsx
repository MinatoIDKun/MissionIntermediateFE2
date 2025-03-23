import React from 'react'

function Navbar() {

    return (
    <>
    <nav className='border-b-1 border-other-border bg-other-primaryBackground z-1000 fixed w-full'>
        <div className='flex h-24 ml-20 p-4'>
            <img
                src={'src/assets/images/logo-videobelajar.svg'}
                alt='logo-videobelajar'
            />
        </div>
    </nav>
    </>
    )
}    

export default Navbar