import React from 'react'

const Banner = () => {
  return (
      <div className="max-w-full h-screen pt-24 pb-24 mx-auto">
        <div className=" bg-[url('/Banner.png')] bg-no-repeat max-w-full h-screen mx-48 bg-size-cover pt-42  justify-center">
        <h1 className="text-80 text-center justify-center font-4 lh-6 ld-04 text-black-700 mb-6 text-6xl font-black font-riot">
        We Build <span className='bg-orange-200 ps-3 pe-1'>Digital</span> Product <br /> For Your Success
        </h1>
        <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          nine4 is a free to use template website for websites made
          <br />
          with Next.js and styled with Tailwind CSS
        </h2>
        <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent px-7 text-md md:mt-0  hover:bg-white"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center bg-orange-500 p-5 rounded-md px-10">Get Started</span>
            </div>
          </a>
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent px-7 text-md md:mt-0  hover:bg-white"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center bg-orange-300 p-5 rounded-md px-10 text-orange-600">Watch Demo</span>
            </div>
          </a>
        </div>
        </div>
      </div>
  )
}

export default Banner