import React from 'react';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';
import {
     RiBriefcase4Fill,
     RiTeamFill,
     RiTodoFill,
     RiArrowDownSLine
} from 'react-icons/ri';
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  return (
       <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-pink-100 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none '>
            
            <div className='container mx-auto'>
                 
                 <div className='flex justify-between gap-x-8'>
                      
                      <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                           
                           <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Full Stack Engineer</div>
                    
                           <h1 className='h1 mb-4'>Hello,my name is Rushikesh Pawar</h1>
                           <p className='subtitle max-w-[490px] ml-0 mx-auto xl:max-0'>Brief description with insights into myself , my vocational journey,and what I engage in professianally</p>
                           <div>
                                <Link href='/contact'>
                                     <Button className='gap-x-2'>Contact me<Send size={18}/></Button>
                                </Link>

                                <Link>
                                     <Button varient='secon' className='gap-x-2'>Download CV<Download size={18}/></Button>
                                </Link>
                           </div>
                      </div>
                      <div className='hidden xl:flex relative'>image</div>
                 </div>

                 <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                      
                     <RiArrowDownSLine className='text-3xl text-primary'/>
                  </div>

          </div>
    </section>
  )
}

export default Hero