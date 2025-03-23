import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from '../atoms/GoogleButton.jsx';
import Divider from '../atoms/Divider.jsx';

function LoginForm () {
    const [email, setEmail] = useState('');
    const [kataSandi, setKataSandi] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        // Implement login logic here
        console.log('Login dengan:', email, kataSandi)

        navigate ('/home')
    };

    const goToRegister = () => {
        navigate ('/register')
    };

  return (
    <>
    <section>
        <div className='w-3xl p-9 bg-other-primaryBackground border-1 border-other-border rounded-ss-sm'>
            <form onSubmit={handleLogin}>
                <h1 className='text-center'>Masuk ke Akun</h1>
                <h6 className='text-textDark-secondary font-light text-center'>Yuk, lanjutin belajarmu di videobelajar</h6>
                <div className='mt-9'>
                    <p className=''>E-Mail
                        <span className='text-red-600 ml-1.5'>*</span>
                        <input type="text" id="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required
                        className='w-full h-14'
                        />
                    </p>
                    <p className='my-6'>Kata Sandi
                        <span className='text-red-600 ml-1.5'>*</span>
                        <input type="password" id="kata-sandi" value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} required
                        className='w-full h-14'
                        />
                    </p>
                    <p className='text-right font-medium text-textDark-tertiary cursor-pointer'>
                        Lupa Password?
                    </p>
                    <button type='submit'
                    className='bg-primary-default text-textLight-primary w-full h-14 rounded-xl mt-6 font-medium cursor-pointer'>
                        Masuk
                    </button>
                    <button type='button' onClick={goToRegister}
                    className='bg-primary-100 text-primary-default w-full h-14 rounded-xl mt-4 font-medium cursor-pointer'>
                        Daftar
                    </button>
                    <Divider />
                    <GoogleButton />
                </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default LoginForm