import Image from 'next/image'
import React from 'react'
import { Tick } from '@/constant'

const Ideas = () => {
  return (
    <div className='flex flex-col max-sm:flex-auto'>
        <div className="columns-2 mx-auto max-sm:columns-1 max-sm:mx-0">
            <div className=''>
                <Image src="/expirence.png" alt="user" width={480} height={500} className='ps-24 max-sm:ps-0'></Image>
            </div>
            <div className='ms-32 max-sm:ms-5 pt-24'>
                <h1 className='text-4xl lg:text-3xl md:text-2xl sm:text-xl font-riot font-bold w-[370px]'>Explore Your Best Ideas On A Whiteboard</h1>
                <p className='font-riot py-5 w-[340px]'>Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus nulla ornare egestas. </p>
                {Tick.map((item, index) => (
                    <div key={index}>
                        <Image src={item.img} alt={item.alt} width={20} height={20} className='inline'></Image>
                        <p className='inline px-5'>{item.info}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Ideas