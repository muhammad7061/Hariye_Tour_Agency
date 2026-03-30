import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [open, setOpen] = useState(false)

    // Helper for desktop links to include the animated underline
    const navLinkStyles = ({ isActive }) => `
        relative pb-1 font-medium transition-all duration-300 group
        ${isActive ? 'text-green-600' : 'text-slate-700 hover:text-green-600'}
    `

    // Sub-component for the underline to keep the return clean
    const Underline = ({ isActive }) => (
        <span className={`
            absolute bottom-0 left-0 h-[2px] bg-green-600 transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}></span>
    )

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-[100]">
            <nav className="mx-auto w-[90%] px-0 py-4 flex justify-between items-center lg:w-[80%]">
                
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-emerald-600">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-lg md:text-xl font-bold text-green-600">Hariye Tour Agency</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {['Home', 'Tours', 'Bookings'].map((item) => {
                        const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`;
                        return (
                            <NavLink key={item} to={path} className={navLinkStyles}>
                                {({ isActive }) => (
                                    <>
                                        {item}
                                        <Underline isActive={isActive} />
                                    </>
                                )}
                            </NavLink>
                        )
                    })}

                    <Link to="/login" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all shadow-md font-semibold ml-4">
                        Login
                    </Link>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden text-2xl text-green-600 cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="fixed top-[72px] left-0 w-full bg-white shadow-2xl flex flex-col items-center gap-6 py-10 md:hidden z-50 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
                        {['Home', 'Tours', 'Bookings'].map((item) => (
                            <NavLink 
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-green-600' : 'text-slate-800'}`}
                            >
                                {item}
                            </NavLink>
                        ))}
                        <div className="w-[85%] mt-2">
                            <Link to="/login" onClick={() => setOpen(false)} className="block w-full text-center bg-green-600 text-white py-4 rounded-xl text-lg font-bold">
                                Login
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header