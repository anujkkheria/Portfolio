import React from 'react'
import anuj from '../assets/anuj.jpg'
const Hero:React.FC = () => {
  return (
    <div className='hero container flex flex-col gap-4 content-center items-center justify-center min-w-full h-[100%]'>
       <div className='img-container h-[40%] w-[80%] sm:h-50 sm:w-80  relative flex justify-center items-center '>
        <div className='img-bg lg:h-[108%] lg:w-[100%] h-full w-full border-4 border-rose-500 absolute z-0 flex justify-center rounded-full  content-center'>
        </div>
          <img src={anuj} alt="anuj" className='lg:h-[100%] lg:w-[95%] w-[95%] h-[95%] z-10 p-4 rounded-full' />
       </div>
       <h1 className='gradient-text Welcome'>Welcome</h1>
      <p className=' ml-[50%] font-bold text-xl'>
         I am Anuj Kumar Kheria, I am a Web developer, designer. I have a dream a dream to change enhance and develop ways how we preceive the world around us 
        </p>
        </div>
        
  )
}

export default Hero