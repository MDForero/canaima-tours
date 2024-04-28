import { contactos } from '@/app/data'
import Link from 'next/link'
import React from 'react'

const Footer = ({ links, socials }) => {
    const reservas = [
        { name: 'Términos y condiciones', url: '/terminos/' },
        { name: 'Política de privacidad', url: '/privacidad/' },
        { name: 'Política de cookies', url: '/cookies/' },
    ]
    return (

        <footer className='bg-green-900'>
            <div className='max-w-screen-2xl w-full lg:p-10 flex justify-evenly items-start mx-auto'>

                <div className='max-w-96 w-full space-y-3 text-green-200'>
                    <h3 className='text-2xl font-bold text-green-50'>Nosotros</h3>
                    <p>Somos una empresa de turismo agroturístico con sede en Casanare, Colombia. Nos dedicamos a ofrecer experiencias únicas y educativas a nuestros visitantes, que les permitan conocer de cerca los diferentes procesos de transformación de productos turísticos y agroindustriales, así como la historia de la región.</p>
                    <ul className='flex w-fit mx-auto gap-12'>
                        {socials.map(social => <li key={social.name} className=''><Link href={social.url} ><img src={social.svg} className='w-10 h-10' /></Link></li>)}
                    </ul>
                </div>
                <div className='max-w-96 w-full text-green-200'>
                    <h3 className='text-2xl font-bold text-green-50'>Secciones</h3>
                    <ul>
                        {links.map(link => <li key={link.name}><Link href={link.url}>{link.name}</Link></li>)}
                    </ul>
                </div>
                <div className='max-w-96 w-full text-green-200'>
                    <h3 className='text-2xl font-bold text-green-50'>Políticas</h3>
                    <ul>
                        {reservas.map(link => <li key={link.name}><Link href={link.url}>{link.name}</Link></li>)}
                    </ul>
                </div>
                <div className='max-w-96 w-full text-green-200'>
                    <h3 className='text-2xl font-bold text-green-50'>Contacto</h3>
                    <dl>
                        <dt className='font-semibold text-green-50'>Correo:</dt>
                        <dd className='ml-4'><a className='hover:text-green-50' href='mailto:canaimatours@gmail.com'>canaimatours@gmail.com</a></dd>
                        <dt className='font-semibold text-green-50'>Teléfonos:</dt>
                        <dd className='ml-4'>{contactos.map(tel => <a key={tel.nombre} className='hover:text-green-50' href={`tel:${tel.telefono}`}>{tel.telefono} </a>)}</dd>
                        <dt className='font-semibold text-green-50'>Dirección:</dt>
                        <dd className='ml-4'><a className='hover:text-green-50' href='https://maps.app.goo.gl/R33yB9X4EAVvuYuP9'>Vereda Bellavista. Km 5 via Monterrey Yopal SectorBugambiles, Monterrey, Casanare</a></dd>
                    </dl>
                </div>
            </div>
        </footer>
    )
}

export default Footer