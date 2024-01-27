import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Nav from './Nav';
import Logo from './Logo';
import Socials from '../Socials';
import React, { useState } from "react";
import { useRouter } from 'next/router';  // Import useRouter from Next.js

const MobileNav = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleSheetTriggerClick = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  // Close the mobile nav when a navigation link is clicked
  const handleNavLinkClick = () => {
    closeMobileNav();
  };

  // Use useEffect to close the mobile nav when navigating to another page
  useEffect(() => {
    closeMobileNav();
  }, [router.pathname]); // Trigger the effect when the pathname changes

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Socials containerStyles="flex gap-x-4 " iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;