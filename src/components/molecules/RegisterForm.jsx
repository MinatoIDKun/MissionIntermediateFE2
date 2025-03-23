import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleButton from '../atoms/GoogleButton.jsx'
import Divider from '../atoms/Divider.jsx'

function RegisterForm () {
    const [email, setEmail] = useState('')
    const [kataSandi, setKataSandi] = useState('')
    const [namaLengkap, setNamaLengkap] = useState('')
    const [konfirmasiKataSandi, setKonfirmasiKataSandi] = useState('')
    const [noHp, setNoHp] = useState('');
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        // Implement login logic here
        console.log('Login dengan:', email, kataSandi)

        navigate ('/home')
    }

    const goToRegister = () => {
        navigate ('/register')
    }

  return (
    <>
    <section>
        <div className='w-3xl p-9 bg-other-primaryBackground border-1 border-other-border rounded-ss-sm'>
            <form onSubmit={handleLogin}>
                <h1 className='text-center'>Pendaftaran Akun</h1>
                <h6 className='text-textDark-secondary font-light text-center'>Yuk, daftarkan akunmu sekarang juga!</h6>
                <div className='mt-9'>
                <p className=''>Nama Lengkap
                        <span className='text-red-600 ml-1.5'>*</span>
                        <input type="text" id="namaLengkap" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} required
                        className='w-full h-14 mb-6'
                        />
                    </p>
                    <p className=''>E-Mail
                        <span className='text-red-600 ml-1.5'>*</span>
                        <input type="text" id="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required
                        className='w-full h-14'
                        />
                    </p>
                    <p className='mt-6'>No. Hp
                        <span className='text-red-600 ml-1.5'>*</span>
                        <div className='flex justify-around'>
                            <select className='mr-6'>
                                <option value="0">+62</option>
                            </select>
                            <input className='w-full h-14'
                            type='no-hp' id='no-Hp' value={noHp} onChange={(e) => setNoHp(e.target.value)} required/>
                        </div>
                    </p>
                    <p className='my-6'>Kata Sandi
                        <span className='text-red-600 ml-1.5'>*</span>
                        <input type="password" id="kata-sandi" value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} required
                        className='w-full h-14'
                        />
                    </p>
                    <p className='my-6'>Konfirmasi Kata Sandi
                        <span className='text-red-600 ml-1.5'>*</span>
                        <input type="password" id="konfirmasi-kata-sandi" value={konfirmasiKataSandi} onChange={(e) => setKonfirmasiKataSandi(e.target.value)} required
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

export default RegisterForm