import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import Blogs from './Blogs'
import { blog } from '../utils/interfaces'
import axios from '../utils/axios'
const BlogSection: React.FC<any> = () => {
  const [blogsList, setBlogsList] = useState<any>()
  async function fetchBlogs() {
    const data = await axios.get('blogs/getall').then((result) => {
      console.log(result)
      return result.data.blogs
    })

    setBlogsList(data)
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  useEffect(() => console.log(blogsList), [blogsList])
  return (
    <div className='w-full h-5/6  md:h-4/5 md:w-1/3 shadow-xl border-2 border-black flex flex-col'>
      <div className='flex flex-row-reverse p-2 pl-5'>
        <input
          type='text'
          placeholder='Search'
          className=' border-2 border-solid border-black rounded-3xl px-2 py-1 justify-self-end focus:border-cyan-600'
        />
      </div>
      <div className='Blogs flex flex-col max-h-1/2 overflow-y-scroll overflow-x-clip p-5 gap-2 items-center justify-between'>
        {blogsList &&
          blogsList.map((blog: blog, i: number) => {
            console.log(typeof blog)
            return <Blogs key={blog.id} blog={blog} index={i} />
          })}
      </div>
    </div>
  )
}

export default BlogSection
