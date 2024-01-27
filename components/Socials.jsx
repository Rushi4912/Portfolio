"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill
} from 'react-icons/ri';
import Link from 'next/link';
import React from 'react';

const icons = [
  {
    path: "https://www.youtube.com/@sanskarirushi",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/rushikesh-pawar-98063a228/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Rushi4912",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/Sanskari_Rushi",
    name: <RiTwitterFill />,
  },
  {
    path: "https://www.instagram.com/sanskari_rushi/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>

      {
        icons.map((icon, index) => {
          
          return <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{ icon.name}</div>
          </Link>
        })
     }
    </div>
  )
}

export default Socials