import React from 'react'
import anuj from '../assets/anuj.jpg'
import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud'
import BlogSection from '../Components/BlogSection'
const Hero: React.FC = () => {
  // const [BlogsList, setBlogsList] = useState<any>()
  // https://portfolio-api-6lnv.onrender.com
  console.log(import.meta.env.VITE_API_URL)

  return (
    <div className='w-full h-[90%] flex md:gap-1 justify-center flex-wrap md:flex-nowrap p-2'>
      {/* <nav className="w-full h-14 bg-black">Navbar</nav> */}
      <section className='w-full h-full md:w-1/2  flex justify-center items-center'>
        <div className=' w-full h-[90%] md:h-4/5 md:w-3/5   mx-auto shadow-xl bg-gradient-to-b from-30% from-blue-600 to-20% to-white flex flex-col justify-around items-center'>
          <div className='mt-4 border-[0.5rem] shadow-lg border-white rounded-full  '>
            <img
              src={anuj}
              alt=''
              className=' w-40 h-40 rounded-full shadow-lg'
            />
          </div>
          <div className=' text-center'>
            <h2>Anuj Kumar Kheria</h2>
            <h3>@AnujKheria</h3>
          </div>
          <div>
            <TagCloud
              options={(): TagCloudOptions => ({
                radius: 50,
                maxSpeed: 'fast',
              })}
            >
              {['Python', 'React', 'Nodejs', 'Java', 'Mongo', 'SQL', 'Nextjs']}
            </TagCloud>
          </div>
        </div>
      </section>
      <section className='h-full w-full md:w-1/2 md:px-5 flex items-center justify-center mx-auto'>
        <BlogSection />
      </section>
    </div>
  )
}

export default Hero
