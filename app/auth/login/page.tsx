import { HeraLoginForm } from '@/components/Hera/HeraLoginForm'
import Link from 'next/link'
import React from 'react'
import { Sansation } from 'next/font/google'

const sansation = Sansation({
    weight: '700',
    subsets: ['latin']
})

function page() {
    return (
        <div className='h-full flex flex-col justify-between items-center px-12 py-[12dvh]'>
            <div className={`${sansation.className} w-full text-3xl`}>Heradash.</div>
            <div className='w-full flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <h1 className='text-5xl text-gray-950'>Olá,</h1>
                    <h1 className='text-5xl text-gray-950'>Bem-vindo!</h1>
                </div>
                <p className='text-gray-500 text-sm md:text-base'>Insira suas credenciais para entrar no sistema.</p>
            </div>
            <HeraLoginForm />
            <div className='w-full text-xs md:text-sm lg:text-base'>
                <p>Esqueceu a senha? <Link className='text-blue-500' href={`/dashboard`}>Entre em contato com o suporte</Link></p>
            </div>
        </div>
    )
}

export default page
