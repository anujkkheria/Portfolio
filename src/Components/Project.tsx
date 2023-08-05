import React from 'react'
import { Card , CardMedia} from '@mui/material'
import software from '../assets/pexels-markus-spiske-965345.jpg'
const Project:React.FC = () => {
  return (
    <>
    <h1 className='text-white text-6xl text-center m-20'>Projects</h1>
    <div className="flex flex-wrap gap-4 justify-evenly">
<Card sx={{width:'100%',textAlign:'center', m:4}}>
  <CardMedia component="img" image={software} sx={{borderRadius:1,}}/>
 <h3 className='text-blue-600 font-bold text-3xl'>Software</h3>
</Card>
<Card sx={{width:'100%',textAlign:'center',m:4}}>
  <CardMedia component="img" image={software} sx={{borderRadius:1,p:1}}/>
 <h3 className='text-blue-600 font-bold text-3xl'>Software</h3>
</Card>
    </div>
    </>
  )
}

export default Project