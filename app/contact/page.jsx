import React from 'react';
// import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import { Mail } from "lucide-react";
import { Home } from "lucide-react";
import { PhoneCall } from "lucide-react";
import Form from '@/components/Form';

const Contact = ()=> {
  return (
    <section>
      <div className="container mx-auto">
        {/* test illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8 ">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Reach out for projects, questions, or just to say hello! Let's
              start a conversation—your ideas, my expertise. Let's make it
              happen!
            </p>
          </div>
          {/* illustration  */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light datk:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* info text and form  */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}

          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail  */}
            <div className="flex items-center gap-x-8">
              <Mail size={18} className="text-primary" />
              <div>sanskarirushi@gmail.com</div>
            </div>

            {/* address */}
            <div className="flex items-center gap-x-8">
              <Home size={18} className="text-primary" />
              <div>Beed Maharastra,India</div>
            </div>
            {/* phone  */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 7666167986</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;