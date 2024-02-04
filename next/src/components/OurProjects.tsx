import Image from 'next/image'
import React from 'react'

const OurProjects = () => {
  return (
    <div className='flex flex-col justify-center py-24'>
        <div className="container mx-auto px-32 justify-center">
            <h1 className='text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base font-riot font-bold'>Our Projects</h1><hr className='h-[8px] bg-orange-300 w-[215px] mt-[-15px]'/>
            <p className='float-start w-[400px] pt-3 font-riot font-medium'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
            <a href="/" className='float-end text-orange-600 font-riot font-bold'>See More</a>
        </div>
        <div className="columns-2 mx-auto pt-16">
            <div className=' text-center'>
                <b className='text-center text-2xl font-riot font-bold'>Watch - Product Responsive <br /> Landing Page</b>
                <Image src="/projects-watch.png" alt="watch" width={700} height={500}></Image>
            </div>
            <div className=' text-center'>
                <b className='text-center text-2xl font-riot font-bold'>SEO Agency - Creative <br /> Landing Page</b>
                <Image src="/projects-seo.png" alt="seo" width={700} height={500} />
            </div>
        </div>
    </div>
  )
}

export default OurProjects