import React from 'react';
import Navbar from '../organism/Navbar.jsx';
import LoginForm from '../molecules/LoginForm.jsx';

function Login() {

    return (
        <>
        <main className='m-0 p-0 flex flex-col overflow-hidden bg-baseBackground'>
            <Navbar />
            <div className='flex justify-center items-center h-screen'>
                <LoginForm />
            </div>
        </main>
        </>
    )
}

export default Login