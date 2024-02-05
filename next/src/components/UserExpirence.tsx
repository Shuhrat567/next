import Image from 'next/image'
import React from 'react'
import { Tick } from '@/constant'

const UserExpirence = () => {
  return (
    <div className='flex flex-col'>
        <div className="columns-2 mx-auto max-sm:columns-1 max-sm:mx-0">
            <div className='ms-32 max-sm:ms-5 pt-24'>
                <h1 className='text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-2xl max-sm:w-[360px] font-riot font-bold'>Providing The World's Best User Experiences</h1>
                <p className='font-riot py-5 w-[480px] max-sm:w-[340px]'>Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus nulla ornare egestas. </p>
                {Tick.map((item, index) => (
                    <div key={index}>
                        <Image src={item.img} alt={item.alt} width={20} height={20} className='inline'></Image>
                        <p className='inline px-5'>{item.info}</p>
                    </div>
                ))}
            </div>
            <div className='max-sm:flex-row '>
                <Image src="/ideas.png" alt="user" width={600} height={600} className='ps-24 max-sm:ps-0 '></Image>
            </div>
        </div>
    </div>
  )
}

export default UserExpirence