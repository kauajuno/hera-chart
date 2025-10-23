import { HeraLoginForm } from '@/components/Hera/HeraLoginForm'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='h-full flex flex-col justify-between items-center px-12 py-[12dvh]'>
            <div className='text-2xl font-bold w-full'>Heradash.</div>
            <div className='w-full'>
                <h1 className='text-5xl text-gray-950'>Olá,</h1>
                <h1 className='text-5xl text-gray-950'>Bem-vindo de volta!</h1>
                <p className='text-gray-500'>Insira suas credenciais para entrar no sistema.</p>
            </div>
            <HeraLoginForm />
            <div className='w-full'>
                <p>Esqueceu a senha? <Link className='text-blue-500' href={`/dashboard`}>Entre em contato com o suporte</Link></p>
            </div>
        </div>
    )
}

export default page
