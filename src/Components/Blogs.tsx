import React from 'react'
import { motion } from 'framer-motion'
import { Typography, Box } from '@mui/material'
import { Iblogcomp } from '../utils/interfaces'
const Blogs: React.FC<Iblogcomp> = ({ blog, index }) => {
  console.log(blog)
  return (
    <motion.div
      style={{ height: '100%', width: '100%' }}
      initial={{ translateY: 100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
    >
      <Box
        component={'a'}
        sx={{ width: '100%', height: '100%' }}
        href={blog.link}
      >
        <div className='border border-black flex items-center w-full h-full text-black text-lg p-4 m-2 '>
          <Typography sx={{ textAlign: 'center' }}>{blog.title}</Typography>
        </div>
      </Box>
    </motion.div>
  )
}

export default Blogs
