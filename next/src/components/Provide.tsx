import React from 'react'
import { ProvideLinks } from '@/constant'
import Image from 'next/image'

const Provide = () => {
  return (
    <div className='flex flex-col justify-center py-24'>
        <div className="container mx-auto px-32 justify-center">
            <h1 className='text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base font-riot font-bold'>What We Provide</h1><hr className='h-[8px] bg-orange-300 w-[290px] mt-[-15px]'/>
            <p className='float-start w-[400px] pt-3 font-riot font-medium'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
            <a href="/" className='float-end text-orange-600 font-riot font-bold'>See More</a>
        </div>
        <div className='flex justify-center'>
            {ProvideLinks.map((item, index) => (
                <div key={index} className='text-center pt-20 mx-auto'>
                    <Image src={item.img} alt={item.title} width={150} height={150} className='m-auto drop-shadow-2xl'></Image>
                    <b className='text-center text-2xl font-riot font-bold pt-[-100px]'>{item.title}</b>
                    <p className='w-[200px] pt-3 font-riot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quidem.</p>
                    <a href="/" className='underline font-riot font-bold'>Learn More</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Provide