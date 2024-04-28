'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Banner = () => {
    const path = usePathname()
    const [banner, setBanner] = useState('')
    const banners = {
        '/servicios/': '/images/servicios.jpg',
        '/nosotros/': '/images/nosotros.jpg',
        '/contacto/': '/images/IMG-20240202-WA0027.jpg',
        '/galeria/': '/images/IMG-20240202-WA0040.jpg',
    }
    useEffect(() => {
        setBanner(banners[path])
    },[path])

    return (
        <>
            {(Object.keys(banners).includes(path) ) ?<main className='relative -z-50'>
                    <Image src={banner} alt='banner' width={0} height={0} className='w-screen h-[600px] object-cover'/>
                    <figure className='absolute top-0 bottom-0 right-0 left-0 w-full h-full flex bg-gray-800/40 justify-center items-center'><img src='/logo.png' className='w-40 h' /></figure>
                </main>:null
                }
        </>
    )
}

export default Banner