'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Nav = ({ links, socials }) => {
    const [show, setShow] = useState(false)
    const path = usePathname()

    return <header className='bg-green-900'>
        <nav className='max-w-screen-2xl flex justify-between items-center mx-auto h-20 bg-green-900 text-green-400  font-semibold text-xl p-8'>
            <figure>
                <img src='/logo.png' alt='logo' className='h-12 w-full relative z-50' />
            </figure>
            <ul className=' lg:flex lg:justify-around lg:gap-4 hidden'>
                {links.map(link => <li key={link.name} className={path === link.url? 'border-b-2 ' : ''}><Link  href={link.url} className={path === link.url? 'text-green-100 ' : ''}>{link.name}</Link></li>)}
            </ul>
            <ul className={(show ? ' fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-2 bg-green-900 duration-100' : 'hidden ')}>
                {links.map(link => <li key={link.name} className={path === link.url? 'border-b-2 ' : ''}><Link onClick={()=>setShow(!show)} href={link.url} className={path === link.url? 'text-green-100 ' : ''}>{link.name}</Link></li>)}
            </ul>
            <ul className='lg:flex hidden gap-2'>{socials.map(social => <li key={social.name}><Link href={social.url}><img src={social.svg}  className='h-12'/></Link></li>)}</ul>
            <button onClick={() => setShow(!show)} className='lg:hidden relative z-50'>
                <img src={show ? '/svg/close-circle.svg' : '/svg/menu.svg'} alt='menu' className='h-8 w-8' />
            </button>

        </nav>
    </header>
}

export default Nav