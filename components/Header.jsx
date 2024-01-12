"use client";
import React from 'react';
import Logo from './ui/Logo'
import { useState,useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import Nav from './ui/Nav';
import MobileNav from './ui/MobileNav';

export const Header = () => {
  return (
    <header>
      
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
             <Nav containerStyles='hidden xl:flex gap-x-8 item-center'/>
            <ThemeToggler />
            
            <div className='xl:hidden'>
              <MobileNav/>
            </div>

          </div>
        
       </div>

      </div>
      
       </header>
  )
}
