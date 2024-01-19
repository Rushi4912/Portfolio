import React from 'react';
import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger ,TabsContent} from '@/components/ui/tabs';
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

          title: 'education',
          data: [
               
               {
                    university: 'DBATU University',
                     qualification: 'Bachelor of computer science',
                    years :'2021-2025'
               },
               {
                    university: 'Another University',
                    qualification: 'Bachelor of computer science',
                    years :'2021-2025',
               },
          ]
     },

     {

          title : 'experience',
          data: [
               
              
                {
                    university: 'Freelancer',
                    qualification: 'Full Stack Engineer',
                    years :'2023-2025',
               },
                {
                    company: 'Open AI',
                    qualification: 'AI Engineer',
                    years :'2030-2032'
               }
     
          ]
     },
];

const skillData = [

     {
          title: 'skills',
          data: [
               
               {

                    name: 'HTML,CSS,JavaScript,Tailwind CSS,SASS'
               },
               {
                    name: 'React,Recoil,Next Js,TypeScript'
               },
               {
                    name: 'Node Js ,Express Js ,MongoDb,PostgreSQL'
               }, {
                    name: 'Docker,AWS'
               }
          ]
     },
     {

          title: 'tools',
          data: [
               
               {

                    imagePath: '/about/vscode.svg'
               }, {
                    imagePath: '/about/figma.svg'
               },
               {
                    imagePath: '/about/notion.svg'
               }, {
                    imagePath: '/about/wordpress.svg'
               }
          ]
     }
];


const About = () => {
     const getData = (arr, title) =>{
          return arr.find((item) => item.title === title);
     };


  return (
       <section className='xl:h-[860px] pb-12 xl:py-24'>
            
            <div className='container mx-auto'>
                 
                 <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>

                 <div className='flex flex-col xl:flex-row'>
                      
                      <div className='hidden xl:flex flex-1 relative'>
                           
                           <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png'/>
                      </div>
                      <div className='flex-1'>
                           
                           <Tabs defaultValue='personal'>
                                
                                <TabsList className ='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                     <TabsTrigger value ='personal'> Personal Info</TabsTrigger>
                                     <TabsTrigger value ='qualifications'> Qualification</TabsTrigger>
                                        <TabsTrigger value='skills'> Skills</TabsTrigger>
                                </TabsList>
                                <div className='text-lg mt-12 xl:mt-8'>
                                     <TabsContent value='personal'> personal info</TabsContent>
                                     <TabsContent value='qualifications'> qualifications info</TabsContent>
                                      <TabsContent value='skills'> skills info</TabsContent>
                                </div>
                             </Tabs>
                      </div>
                 </div>
            </div>

    </section>
  )
}

export default About