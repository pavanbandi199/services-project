import { useState } from 'react';
import React from 'react'
import { Menu,X } from 'lucide-react';
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const handleToggleMenu =() => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { label: "Features", href: "#" },
        { label: "Workflow", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Testimonials", href: "#" },
      ];
  return (
    <div>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <span className='bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text font-bold text-xl tracking-tight'>Pavanbandi</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item,index) => (
                            <li key={index}>
                                <a href={item.href}> {item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 px-3 py-2 rounded-md">Create an Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleToggleMenu}>{isMenuOpen ?<X/> : <Menu/>}</button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-8 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                        {navItems.map((item,index) => (
                            <li className='py-3' key={index}>
                                <a href={item.href}> {item.label}</a>
                            </li>
                        ))}
                        </ul>
                        <div className='flex space-x-6'>
                        <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-blue-800 px-3 py-2 rounded-md">Create an Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar