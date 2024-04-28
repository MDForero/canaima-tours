'use client'
import React, { useEffect, useState } from 'react'

const BackTopButton = () => {
    const [show, setShow] = useState(false)
    const backTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <button onClick={backTop} className={show ? 'fixed bottom-8 right-11 bg-green-900 w-10 h-10 flex justify-center items-center rounded-full animate-bounce' : 'hidden '}>
                <div className='border-r-2 border-t-2 -rotate-45 w-4 h-4 mt-2 absolute top-1'></div>
                <div className='border-r-2 border-t-2 -rotate-45 w-4 h-4 mt-2 absolute top-2'></div>
                <div className='border-r-2 border-t-2 -rotate-45 w-4 h-4 mt-2 absolute top-3'></div>
        </button>
    )
}

export default BackTopButton