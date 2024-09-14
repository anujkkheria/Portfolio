import React from 'react'
import { Typography, Box } from '@mui/material'
import { Iblogcomp } from '../utils/interfaces'
const Blogs: React.FC<Iblogcomp> = ({ blog }) => {
  console.log(blog)
  return (
    <Box
      component={'a'}
      sx={{ width: '100%', height: '100%' }}
      href={blog.link}
    >
      <div className='border border-black flex items-center w-full h-full text-black text-lg p-4 m-2 '>
        <Typography sx={{ textAlign: 'center' }}>{blog.title}</Typography>
      </div>
    </Box>
  )
}

export default Blogs
