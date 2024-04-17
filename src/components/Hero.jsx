import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-5'>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
            Lorem ipsum dolor 
            <span className='bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text'>{' '} adipisicing elit.</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nam recusandae sed laudantium repellat sunt possimus numquam dicta, cupiditate eos harum ipsa voluptates ab nihil dolore molestias quaerat. Consequatur, aliquam?</p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">Start for free</a>
            <a href="#" className="py-2 px-3 border rounded-md">Documentation</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className='rounded-md w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4'>
                <source src={video1} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className='rounded-md w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4'>
                <source src={video2} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default Hero