import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between'>
            <div className='flex items-center space-x-5'>
                <Link href='/'>
                    <img
                        className='w-12 object-contain rounded-full'
                        src='https://media.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif' alt='img' 
                    />
                </Link>
                <div className='hidden md:inline-flex items-center space-x-5 text-white'>
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <h1 className='text-black bg-white px-4 py-1 rounded-full'>Follow</h1>
                </div>
            </div>
            <div className='flex space-x-5 items-center text-white'>
                <h3>Sign In</h3>
                <h3>Get Started</h3>
            </div>
        </header>
    )
}

export default Header
