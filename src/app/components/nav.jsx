'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (path) => pathname === path ? 'text-sky-400' : '';
    
    return (
        <header className=' bg-slate-50 shadow-md px-6 py-3 sm:py-4 md:px-10'>
            <nav className='flex items-center justify-between h-16'>
                {/* BRAND LOGO (Desktop & Mobile when sidebar is closed) */}
                <div className={`font-bold text-lg ${menuOpen ? 'hidden md:block' : ''}`}>
                    <Link href='/'>
                        <p className='logo italic text-2xl'>WESTON</p>
                    </Link>
                </div>

                {/* Hamburger Icon (Mobile, only when sidebar is closed) */}
                {!menuOpen && (
                    <button
                        className='hamburger-button md:hidden flex flex-col justify-center items-center w-12 h-12 focus:outline-none z-30 relative'
                        onClick={() => setMenuOpen(true)}
                        aria-label='Open menu'
                    >
                        <span className='hamburger-line block w-6 h-0.5 mb-1'></span>
                        <span className='hamburger-line block w-6 h-0.5 mb-1'></span>
                        <span className='hamburger-line block w-6 h-0.5'></span>
                    </button>
                )}

                {/* Overlay */}
                {menuOpen && (
                    <div
                        className='fixed inset-0 bg-black bg-opacity-40 z-20 animate-fadeIn'
                        onClick={() => setMenuOpen(false)}
                    />
                )}

                {/* Sidebar (Mobile) */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 sidebar-background z-30 transform transition-transform duration-500 ease-in-out
                        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                        md:static md:translate-x-0 md:shadow-none md:bg-transparent md:w-auto md:h-auto md:flex md:items-center md:p-0`}
                >
                    {/* Sidebar Header: Logo and Close Button */}
                    <div className='sidebar-header flex items-center justify-between p-6 md:hidden'>
                        <Link href='/' onClick={() => setMenuOpen(false)}>
                            <span className='logo text-xl italic text-gray-800'>WESTON</span>
                        </Link>
                        <button
                            className='w-8 h-8 flex items-center justify-center focus:outline-none hover:bg-gray-100 rounded-full transition-colors duration-200'
                            onClick={() => setMenuOpen(false)}
                            aria-label='Close menu'
                        >
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6 text-gray-700'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Sidebar Content */}
                    <div className='sidebar-content h-full md:bg-slate-50'>
                        <ul className='links flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 p-6 md:p-0 w-full'>
                            <li className='w-full'>
                                <Link href="/" onClick={() => setMenuOpen(false)} className={`sidebar-link block font-medium ${isActive('/')}`}>Home</Link>
                            </li>
                            <li className='w-full'>
                                <Link href="/about" onClick={() => setMenuOpen(false)} className={`sidebar-link block font-medium ${isActive('/about')}`}>About</Link>
                            </li>
                            <li className='w-full'>
                                <Link href="/properties" onClick={() => setMenuOpen(false)} className={`sidebar-link block font-medium ${isActive('/properties')}`}>Properties</Link>
                            </li>
                            <li className='w-full'>
                                <Link href="/blog" onClick={() => setMenuOpen(false)} className={`sidebar-link block font-medium ${isActive('/blog')}`}>Blog</Link>
                            </li>
                            <li className='w-full'>
                                <Link href="/contact" onClick={() => setMenuOpen(false)} className={`sidebar-link block font-medium ${isActive('/contact')}`}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
