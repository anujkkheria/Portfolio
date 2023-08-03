import React from 'react'
import { Instagram, Facebook,LinkedIn,GitHub} from '@mui/icons-material'
const Hero:React.FC = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 bg-blue-600 h-[92vh] p-2'>
        <a className='col-span-1 justify-self-start'><Instagram sx={{width:50,height:50,fill:'#f5f5f5'}}/></a>
        <div className='col-span-2 justify-self-end'><Facebook sx={{ width:50,height:50,fill:'#f5f5f5'}}/></div>

        <div className=' col-span-5 relative'>
        <div className=' place-self-center flex justify-center items-center overflow-y-hidden p-10 border-4 border-white'>
        <h1 className='text-white text-[3rem]  welcome'>
        Welcome
        </h1> 
        </div>
        <div className=' text-white absolute bottom-[12.5%] left-[40%] bg-blue-600 '>I am <div className='inline-block h-6 pr-2 bg-white overflow-y-hidden pl-1'><ul className='dynamic bg-white text-blue-600 inline-block font-bold overflow-y-hidden leading-6 pl-1'>
        <li>Anuj</li>
        <li>a Developer</li>
        <li>a Web Designer</li>
        <li>a Programmer</li>
        </ul></div></div>
        </div>
        <div className='col-span-1 self-end'><LinkedIn sx={{width:50,height:50,color:"#f5f5f5"}}/></div>
        <div className='col-span-2 place-self-end'><GitHub sx={{width:50,height:50,color:"#f5f5f5"}}/></div>
        </div>
  )
}

export default Hero