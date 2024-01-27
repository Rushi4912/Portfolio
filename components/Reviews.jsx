"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Card,CardDescription,CardHeader,CardTitle } from './ui/card';

import React from 'react';

const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Working with Rushikesh was an absolute pleasure! Their attention to detail and creativity in web design made my project stand out. The end result exceeded my expectations. I highly recommend Rushikesh for anyone looking for a skilled and reliable full-stack engineer..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John",
    job: "CEO",
    review:
      "Rushikesh provided top-notch SaaS solutions for my business. From the initial concept to deployment, the process was smooth and professional. What stood out the most was their responsiveness to my needs and concerns. I feel confident in recommending Rushikesh for anyone seeking a reliable and skilled full-stack engineer..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily",
    job: "Game dev",
    review:
      "I had the pleasure of collaborating with Rushikesh on a web development project, and I was impressed by their innovative solutions and seamless execution. They have a deep understanding of both front-end and back-end technologies. The final product was not only visually appealing but also highly functional. Looking forward to future collaborations! [Fictional]",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "taylor",
    job: "Engineer",
    review:
      "I had a tight deadline for my web project, and Rushikesh delivered beyond my expectations. Their efficiency in web development and commitment to meeting deadlines was truly impressive. I appreciated the clear communication throughout the process. If you're looking for a results-driven full-stack engineer, Rushikesh is the one..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: " Lily",
    job: "Doctor",
    review:
      "I approached Rushikesh for web design services, and I couldn't be happier with the results. Their focus on user-centric design not only enhanced the aesthetics but also improved the overall usability of our website. The attention to detail and commitment to creating an engaging user experience truly set Rushikesh apart..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "David",
    job: "Teacher",
    review:
      "Reliability is key in the fast-paced world of web development, and Rushikesh is someone you can trust. From the initial consultation to the final deployment, every step was handled with professionalism. The communication was transparent, and the project was delivered on time. I highly recommend Rushikesh for any web-related projects.[Fictional]",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px] "
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center  gap-x-4">
                      {/* image  */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name  */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;