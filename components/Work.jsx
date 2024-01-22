"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import {Swiper,SwiperSlide} from 'swiper/react';
//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import "swiper/swiper-bundle.css";
// import required modules
import {Pagination} from 'swiper/modules';


// // import 'swiper/swiper-bundle.min.css'; 
// import 'swiper/css'; // Import Swiper's core styles
// import 'swiper/css/bundle'; // Import the bundle styles (optional)

// import SwiperCore, { Pagination } from 'swiper/core';
// SwiperCore.use([Pagination]);

// components
import ProjectCard from '@/components/ui/ProjectCard';
const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: "this is nexa website made by rushikesh pawar",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description: "this is nexa website made by rushikesh pawar",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Lumina Website",
    description: "this is nexa website made by rushikesh pawar",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Ignite Website",
    description: "this is nexa website made by rushikesh pawar",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description: "this is nexa website made by rushikesh pawar",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Serenity Website",
    description: "this is nexa website made by rushikesh pawar",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Nova Website",
    description: "this is nexa website made by rushikesh pawar",
    link: "/",
    github: "/",
  },
];


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 ">
      <div className="container mx-auto">
        {/* text  */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12b xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad
            laborum suscipit, voluptate iste consequuntur porro nulla maiores
          </p>
          <Link href="/projects">
            <Button> All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={Pagination}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slide  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work