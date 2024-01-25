"use client";
import React from 'react';
import { Button } from './ui/button';
import {Input} from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'>
      {/* input*/}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea  placeholder="Type Your Message Here." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className='flex items-center max-w-[166px] gap-x-1'>Let's Talk
            <ArrowRightIcon size={20}/>
            </Button>
    </form>
  );
}

export default Form