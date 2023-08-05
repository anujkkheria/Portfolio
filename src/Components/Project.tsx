import React from 'react'
import { Card , CardMedia} from '@mui/material'
import software from '../assets/pexels-markus-spiske-965345.jpg'
const Project:React.FC = () => {
  return (
    <>
    <h1 className='text-white text-5xl text-center m-10'>Projects</h1>
    <div className="flex flex-wrap gap-2 justify-evenly">
<Card sx={{width:'50%',textAlign:'center', m:4}}>
  <CardMedia component="img" image={software} sx={{borderRadius:1,p:1}}/>
 <h3 className='text-blue-600 font-bold text-2xl p-2'>Software</h3>
</Card>
<Card sx={{width:'50%',textAlign:'center',m:4  }}>
  <CardMedia component="img" image={software} sx={{borderRadius:1,p:1}}/>
 <h3 className='text-blue-600 font-bold text-2xl p-2'>Software</h3>
</Card>
    </div>
    </>
  )
}

export default Project