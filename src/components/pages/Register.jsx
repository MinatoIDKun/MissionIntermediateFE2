import React from 'react';
import Navbar from '../organism/Navbar.jsx';
import RegisterForm from '../molecules/RegisterForm.jsx';

function Register() {

    return (
        <>
        <main className='m-0 p-0 flex flex-col overflow-hidden bg-baseBackground'>
            <Navbar />
            <div className='flex justify-center h-screen items-center'>
                <RegisterForm />
            </div>
        </main>
        </>
    )
}

export default Register