"use client";
import React from 'react';
import Logo from './ui/Logo'
import { useState,useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import Nav from './ui/Nav';

export const Header = () => {
  return (
    <header>
      
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <div>
             <Nav/>
           <ThemeToggler/>

          </div>
        
       </div>

      </div>
      
       </header>
  )
}
