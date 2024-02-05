"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Data } from '@/constant'

const Customers = ({ data }: {
    data: [
        img: string,
    ]
}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
        setCarouselSize({
            width,
            height,
        })
    }
}, [])
    return (
    <div className='flex flex-col justify-center py-24'>
        <div className='flex mt-3'>
            <div>
                <h1 className='text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base font-riot font-bold'>Our Projects</h1><hr className='h-[-1px] bg-orange-300 w-[215px] mt-[-15px]'/>
                <p>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
            </div>
            <div>
                <button
                    disabled={currentImg == 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border px-4 py-2 font-bold ${currentImg == 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentImg == Data.length - 1}
                    className={`border px-4 py-2 font-bold ${currentImg == Data.length - 1 && 'opacity-50'}`}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                >
                    {">"}
                </button>
            </div>
        </div>
        <div className='w-full rounded-md overflow-hidden relative'>
            <div ref={carouselRef}
                style={{
                    left: -currentImg * carouselSize.width
                }}
                className='w-full h-full flex transition-all duration-300'>
                {Data.map((key, index) => (
                    <div key={index} className='w-full h-full'>
                        <Image
                            className='pointer-events-none'
                            alt="random image"
                            width={20}
                            height={20}
                            src={key.img}
                        />
                        <div className="">
                            <div className='inline'>
                                <h1 className='text-lg font-riot font-bold block'>{key.name}</h1>
                                <span>{key.job}</span>
                            </div>
                            <Image src={key.notice_img} alt={key.name} width={32} height={32} className='inline text-right'/>
                        </div>
                        <p>Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc pulvinar aliquet.</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default Customers