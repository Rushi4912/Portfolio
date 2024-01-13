"use client";
import React, { useState, useEffect } from 'react';
import Logo from './ui/Logo';
import { usePathname } from 'next/navigation';
import ThemeToggler from './ThemeToggler';
import Nav from './ui/Nav';
import MobileNav from './ui/MobileNav';

// Create the Header component
export const Header = () => {
  // Use state to manage the theme
  const [isDarkMode, setDarkMode] = useState(false);
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  // Effect to handle scrolling and set the header state
  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);

    // Save the theme preference in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  // Set the theme based on the user's preference in localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  return (
    <header className={`${header
      ? 'py-4 bg-white  shadow-lg dark:bg-accent'
      : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all`}>
      
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>

            <Nav containerStyles='hidden xl:flex gap-x-8 item-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
            
           <ThemeToggler isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            
            <div className='xl:hidden'>
              <MobileNav/>
            </div>

          </div>
        
       </div>

      </div>
      
       </header>
  )
}
