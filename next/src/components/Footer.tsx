import Image from 'next/image'
import React from 'react'
import { MenuLinks } from '@/constant';
import Link from 'next/link'

export const FooterIcons = [
  {
    src: '/logo-f.png',
    alt: 'Facebook'
  },
  {
    src: '/logo-t.png',
    alt: 'Twitter'
  },
  {
    src: '/logo-b.png',
    alt: 'Instagram'
  },
  {
    src: '/logo-l.png',
    alt: 'Linkedin'
  },
  {
    src: '/logo-v.png',
    alt: 'Version'
  }
]

const Footer = () => {
  return (
    <footer className='bg-yellow-950 pb-10'>
      <div className="flex flex-row mt-24 py-12 text-center justify-center">
        <Image src="/Brand.svg" alt="Brand" width={20} height={20} />
        <h1 className='text-2xl font-riot text-white font-bold px-5'>DevAgency</h1>
      </div>
      <div className="flex flex-wrap mx-[5%] max-sm:mx-[16.5%]">
        {MenuLinks.map((item, idx) => {
          return (
            <li key={idx} className="list-none mx-auto text-white hover:text-gray-900 pb-8">
              <Link href={item.href} className="text-lg font-riot justify-center">
                {item.text}
                </Link>
            </li>
                );
        })}
      </div>
      <hr className='mx-[8%] text-white pb-10'/>
      <div className='columns px-[8%] max-sm:px-[1%] pb-7'>
        <div className='inline ms-[50%] max-sm:mx-[15%] sm:ms-1 float-end max-sm:text-center max-sm:justify-center'>
          {FooterIcons.map((item, idx) => {
            return (
              <Image key={idx} src={item.src} alt={item.alt} width={20} height={20} className='inline mx-3 sm:text-center'/>
            );
          })}
        </div>
        <p className='inline float-start max-sm:text-center w-[360px] text-sm py-3 text-white'>Copyright @ Milton Debnath 2020, All rights reserved</p>

      </div>
    </footer>
  )
}

export default Footer