import React from 'react';
import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabContent, TabList, TabTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calender, BriefCase } from 'lucide-react';

const InfoData =[

     {
          icon: <User2 size={20}/>,
          text: 'Rushikesh Pawar'
     },
      {
          icon: <PhoneCall size={20}/>,
          text: '+91 7666167986'
     },
       {
          icon: <MailIcon size={20}/>,
          text: 'sanskarirushi@gmail.com'
     },
        {
          icon: <GraduationCap size={20}/>,
          text: 'BTech Computer Science'
     },
         {
          icon: <HomeIcon size={20}/>,
          text: 'Beed Maharastra India'
     }
];
const qualificationData = [

     {

          title : 'experience',
          data: [
               
              
                {
                    company: 'Freelancer',
                    qualification: 'Full Stack Engineer',
                    years :'2023-2025',
               },
                {
                    company: 'Open AI',
                    qualification: 'AI Engineer',
                    years :'2030-2032'
               }
          ]
     }
];


const About = () => {
  return (
       <div>
            

    </div>
  )
}

export default About