// "use client"; 
import React from "react";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   User2,
//   MailIcon,
//   HomeIcon,
//   PhoneCall,
//   GraduationCap,
//   Calender,
//   BriefCase,
// } from "lucide-react";


import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calender,
  // BriefCase,
  BriefCase as BriefCaseIcon,
  GraduationCap,
} from "lucide-react";



const InfoData = [
  {
    icon: <User2 size={20}/>,
    text: "Rushikesh Pawar",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7666167986",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sanskarirushi@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BTech Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Beed Maharastra India",
  },
];
// const qualificationData = [
//   {
//     title: "education",
//     data: [
//       {
//         university: "DBATU University",
//         qualification: "Bachelor of computer science",
//         years: "2021-2025",
//       },
//       {
//         university: "Another University",
//         qualification: "Bachelor of computer science",
//         years: "2021-2025",
//       },
//     ],
//   },

//   {
//     title: "experience",
//     data: [
//       {
//         company: "Freelancer",
//         role: "Full Stack Engineer",
//         years: "2023-2025",
//       },
//       {
//         company: "Open AI",
//         role: "AI Engineer",
//         years: "2030-2032",
//       },
//     ],
//   },
// ];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "DBATU University",
        qualification: "Bachelor of computer science",
        years: "2021-2025",
      },
      {
        university: "Internet University",
        qualification: "Bachelor of computer science",
        years: "2021-2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Freelancer",
        role: "Full Stack Engineer",
        years: "2023-2025",
      },
      {
        company: "Open AI",
        role: "AI Engineer",
        years: "2030-2032",
      },
    ],
  },
];


const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML ,CSS ,JavaScript ,Tailwind CSS ,SASS",
      },
      {
        name: "React ,Recoil ,Next Js ,TypeScript",
      },
      {
        name: "Node Js ,Express Js ,MongoDb ,PostgreSQL",
      },
      {
        name: "Docker ,AWS",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imagePath: "/about/vscode.svg",
      },
      {
        imagePath: "/about/figma.svg",
      },
      {
        imagePath: "/about/notion.svg",
      },
      {
        imagePath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  // const getData = (arr, category) => {
  //   const categoryData = arr.find((item) => item.title === category);
  //   return categoryData ? categoryData.data : [];
  // };


  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  {" "}
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  {" "}
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  {" "}
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 2 Years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:max-0">
                      {" "}
                      I specialize in crafting intuitive websites with
                      cutting-edge technology ,delivering dynamic and engaging
                      user experiences.
                    </p>

                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {InfoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English,Japanese ,Hindi ,Marathi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience     */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          {/* <Calender />  */}
                          <GraduationCap />

                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                          {/* <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").length >
                              0 &&
                              getData(qualificationData, "experience")[0]
                                .company}
                          </h4> */}
                        </div>
                        {/* list  */}

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4 mt-2">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                      {/* {typeof years !== "undefined"
                                        ? years
                                        : "N/A"} */}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />

                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                          {/* <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").length >
                              0 &&
                              getData(qualificationData, "education")[0]
                                .university}
                          </h4> */}
                        </div>
                        {/* list  */}

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  {/* <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div> */}
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4 mt-2">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                      {/* {typeof years !== "undefined"
                                        ? years
                                        : "N/A"} */}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use EveryDay</h3>
                    <div className="mb-16">
                      <h4 className="capitalize font-medium text-[22px] mb-2">
                        Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list  */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools  */}
                    <div>
                      <h4 className="capitalize font-medium text-[22px] mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-8"></div>
                      {/* tool list  */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imagePath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imagePath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
