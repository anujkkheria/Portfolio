import React from 'react'

const Home:React.FC = () => {
  return (
    <div className='home'>
        <div className='flex justify-center h-24 px-2 py-4 rounded-full items-center border-y-4  my-2'>
        <img src="" alt="Anuj" />
        </div>
        <div className='flex flex-col '>
        <h2 className='Welcome text-6xl text-blue-600 m-10'>
            Welcome,
        </h2>
        <p className='m-10 leading-8'>I am Anuj Kumar Kheria,  I am a Web Developer, CyberSecurity Enthusiast. I love Writing fiction and poetery and reading books, I have a <span>
            dream, a dream to change enhance and develop hoe we precive world 
            </span>
            </p>
            <blockquote className='italic leading-4 text-red-500 m-10'> 
                "Faliure dares not cross paths with a person who dares not to give up"
                </blockquote>
        </div>
    </div>
  )
}

export default Home