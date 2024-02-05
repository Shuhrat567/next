import Image from 'next/image'
import React from 'react'

const OurProjects = () => {
  return (
    <div className='flex flex-col justify-center py-24 max-sm:py-0'>
        <div className="container mx-auto px-32 max-sm:px-5 justify-center">
            <div className='inline'>
                <h1 className='text-4xl max-lg:text-4xl max-md:text-3xl max-sm:text-3xl font-riot font-bold'>Our Projects</h1><hr className='h-[8px] bg-orange-300 w-[215px] max-sm:w-[180px] mt-[-15px]'/>
                <p className='w-[330px] pt-3 font-riot font-medium'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
            </div>
            <div className='inline-block float-right mt-[-5%] max-sm:mt-[1%] mx-32 max-sm:me-20 max-sm:mx-0'>
                <button type='submit' className='bg-orange-200 py-3 max-sm:py-2 px-5 max-sm:px-12 text-orange-600 font-riot font-bold'>
                        <a href="/">See More</a>
                </button>
            </div>
        </div>
        <div className="columns-2 mx-auto pt-16 max-sm:columns-1">
            <div className='bg-violet-300 text-center max-sm:mx-5 rounded-sm pt-10'>
                <b className='text-center text-2xl font-riot font-bold'>Watch - Product Responsive <br /> Landing Page</b>
                <Image src="/projects-watch.png" alt="watch" width={580} height={480}></Image>
            </div>
            <div className='bg-orange-200 text-center max-sm:mx-5 rounded-sm pt-10 mt-10'>
                <b className='text-center text-2xl font-riot font-bold'>SEO Agency - Creative <br /> Landing Page</b>
                <Image src="/projects-seo.png" alt="seo" width={580} height={480}/>
            </div>
        </div>
    </div>
  )
}

export default OurProjects