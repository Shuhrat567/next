import React from 'react'

const Banner = () => {
  return (
      <div className="max-w-full  h-[950px] pt-24 pb-42 mx-auto max-sm:mx-0 bg-orange-100"> 
        <div className=" bg-[url('/Banner.png')] bg-no-repeat max-w-full h-[750px] bg-cover max-sm:bg-cover max-sm:w-[100%] max-sm:has-[500px] pt-50  justify-center mx-52  max-sm:mx-0 lg:mx-40 md:mx-28 sm:mx-1">
        <h1 className="text-80 text-center justify-center font-4 lh-6 ld-04 text-black-700 mb-6 text-6xl font-black font-riot lg:text-5xl md:text-4xl max-sm:text-xl">
        We Build <span className='bg-orange-200 ps-3 pe-1'>Digital</span> Product <br /> For Your Success
        </h1>
        <h2 className="text-2xl lg:text-lg md:text-base sm:text-sm font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center max-sm:text-hidden">
          nine4 is a free to use template website for websites made
          <br />
          with Next.js and styled with Tailwind CSS
        </h2>
        <div className="ml-6 max-sm:ml-0 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent px-7 text-md md:mt-0"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center bg-orange-500 p-5 max-lg:p-4 max-md:p-3 max-sm:p-2 rounded-md px-10 max-lg:px-8 max-md:px-6 max-sm:px-4">Get Started</span>
            </div>
          </a>
          <a className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent px-7 text-md max-md:mt-0"href="/">
            <div className="flex text-lg">
              <span className="justify-center bg-orange-300 text-orange-600 p-5 max-lg:p-4 max-md:p-3 max-sm:p-2 rounded-md px-10 max-lg:px-8 max-md:px-6 max-sm:px-4">Watch Demo</span>
            </div>
          </a>
        </div>
        </div>
      </div>
  )
}

export default Banner