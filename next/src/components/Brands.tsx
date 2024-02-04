import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='flex flex-wrap justify-center pt-52 pb-28'>
        <Image src='/behance.svg' className='px-10' alt='behance' width={270} height={50}></Image>
        <Image src="/cocacola.svg" className='px-10' alt="cocacola" width={270} height={50}></Image>
        <Image src="/google.svg" className='px-10' alt="google" width={270} height={50}></Image>
        <Image src="/iribbble.svg" className='px-10' alt="iribbble" width={270} height={50}></Image>
        <Image src="/amazon.svg" className='px-10' alt="amazon" width={270} height={50}></Image>
    </div>
  )
}

export default Brands