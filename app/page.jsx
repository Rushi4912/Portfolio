"use client";
import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation'; // Updated import statement
import analytics from "@vercel/analytics";
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Track pageview when the route changes
      analytics.page();
    };

    // Initialize analytics
    analytics.init({
      // Add your project's deployment URL here
      app: "portfolio-94cv2p7nz-rushikesh-pawars-projects.vercel.app",
    });

    // Track the initial pageview
    analytics.page();

    // Set up a listener for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return <main>

    <Hero />
    <About />
    <Services />
    <Work />
    <Reviews />
    <Cta/>
  </main>
}
