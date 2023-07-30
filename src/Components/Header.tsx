import React from 'react'
import { Menu } from '@mui/icons-material'
import { IconButton} from '@mui/material'
const Header:React.FC<any> = ({ToggleSidebar}) => {
  return (
    <div className=' z-10 h-14 bg-blue-600 flex items-center justify-between p-2' >
        <div className="logo p-2 bg-gradient-to-l  from-cyan-500 to-blue-500 rounded-full shadow-2xl h-10 flex justify-center">
            <div className="inti font-medium text-white">Ak<sup>2</sup></div>
        </div>
            <div className="text-white">Anuj Kumar Kheria</div>
            <IconButton sx={{backgroundColor:'#2563EB', borderRadius:0}} onClick={()=>ToggleSidebar()}>
                <Menu sx={{color:'#f6f6f6'}} />
                </IconButton>
    </div>
  )
}

export default Header