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
      "Rushikesh made my project stand out with creative web design. Highly recommended for skilled full-stack engineering..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John",
    job: "CEO",
    review:
      "Rushikesh provided top-notch SaaS solutions—smooth, professional, and highly recommended for reliable full-stack engineering..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily",
    job: "Game dev",
    review:
      "Rushikesh impressed with innovative web development. Visually appealing and highly functional. Looking forward to future collaborations! [Fictional]",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "taylor",
    job: "Engineer",
    review:
      "Rushikesh provided top-notch SaaS solutions—smooth, professional, and highly recommended for reliable full-stack engineering..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: " Lily",
    job: "Doctor",
    review:
      "Rushikesh made my project stand out with creative web design. Highly recommended for skilled full-stack engineering..[Fictional]",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "David",
    job: "Teacher",
    review:
      "Rushikesh impressed with innovative web development. Visually appealing and highly functional. Looking forward to future collaborations! [Fictional]",
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