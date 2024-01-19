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
                    company: 'Freelancer',
                    role: 'Full Stack Engineer',
                    years :'2023-2025',
               },
                {
                    company: 'Open AI',
                    role: 'AI Engineer',
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
                                     <TabsTrigger className='w-[162px] xl:w-auto' value ='personal'> Personal Info</TabsTrigger>
                                     <TabsTrigger className='w-[162px] xl:w-auto' value ='qualifications'> Qualification</TabsTrigger>
                                        <TabsTrigger className='w-[162px] xl:w-auto' value='skills'> Skills</TabsTrigger>
                                </TabsList>
                                <div className='text-lg mt-12 xl:mt-8'>
                                     <TabsContent value='personal'>
                                     
                                          <div className='text-center xl:text-left'>
                                               <h3 className='h3 mb-4'>Unmatched Service Quality for Over 2 Years</h3>
                                               <p className='subtitle max-w-xl max-auto xl:max-0'> I specialize in crafting intuitive websites with cutting-edge technology ,delivering dynamic and engaging user experiences.</p>
                                         // icons
                                               <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                                    {
                                                         InfoData.map((item, index) => {
                                                              
                                                              return (
                                                                   <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                                        <div className='text-primary'>{item.icon}</div>
                                                                        <div>{ item.text}</div>

                                                                   </div>
                                                              );
                                                         })
                                                    }

                                               </div>

                                               // languages
                                               <div className='flex flex-col gap-y-2'>
                                                    
                                                    <div className='text-primary'>Language Skill</div>
                                                    <div className="border-b border-border"></div>
                                                    <div>English,Japanese ,Hindi ,Marathi</div>
                                               </div>
                                     </div>
                                     
                                     </TabsContent>
                                     <TabsContent value='qualifications'>
                                          <div>
                                               
                                               <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                               {/* experience and education wrapper */}
                                               <div>
                                                 {/* experience     */}
                                                    <div>
                                                         
                                                         <div className='flex gap-x-4 items-center text-[22px]'>
                                                              <BriefCase/>   

                                                              <h4 className='capitalize font-medium'>
                                                                   {
                                                                        getData(qualificationData,'experience').title
                                                                   }
                                                              </h4>
                                                         </div>
                                                         {/* list  */}

                                                         <div>
                                                              
                                                              {
                                                                   getData(qualificationData, 'experience').data.map((item, index) => {
                                                                        const { company, role, years } = item;
                                                                        return (
                                                                             <div>
                                                                                  
                                                                                  <div></div>
                                                                                  <div></div>
                                                                                  <div></div>
                                                                             </div>
                                                                        );
                                                                   })
                                                              }
                                                         </div>
                                                    </div>
                                                    
                                                    {/* education */}
                                               <div>education</div>

                                               </div>
                                     </div>
                                     
                                     </TabsContent>
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