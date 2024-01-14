"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill
} from 'react-icons/ri';
import Link from 'next/link'
import React from 'react';

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill/>
  },
  {
    path: '/',
    name: <RiLinkedinFill/>
  },
  {
    path: '/',
    name: <RiGithubFill/>
  },
  {
    path: '/',
    name: <RiTwitterFill/>
  },
  {
    path: '/',
    name: <RiInstagramFill/>
  },
]

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