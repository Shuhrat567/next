import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col justify-center text-center mx-auto py-10'>
        <h1 className='text-4xl max-sm:text-3xl max-sm:ps-5 font-riot font-bold'>Newsletter Subscription</h1>
        <p className='max-sm:w-[340px] max-sm:ps-2'>Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet</p>
            <div className="sm:col-span-4 text-center justify-center">
                <div className="mt-2 border border-gray-300 w-1/3 max-sm:w-full max-sm:px-2">
                    <input type="text" name="username" id="username" className="flex-1 text-left  inline border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter your email address"/>
                    <button type='submit' className='bg-orange-500 text-white px-7 py-2 font-riot rounded-sm ms-52 max-sm:ms-8 my-1 text-end'>Subscribe</button>
                </div>
            </div>
    </div>
  )
}

export default Form