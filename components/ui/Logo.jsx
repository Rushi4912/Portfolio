import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
    
      <Image src='/rushi2.png' width={70} height={54} priority alt='' />
    </Link>
  );
}

export default Logo;