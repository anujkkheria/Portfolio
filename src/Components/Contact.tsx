import React from 'react'
import { TextField,Button } from '@mui/material'
import { InputStyle } from './inputStyle'
const Contact:React.FC = () => {
  return (
    <div className='flex p-5 justify-center items-center min-h-screen bg-black'>
     <div className='border-4 p-5 border-white flex flex-col gap-5'>
     <TextField label={"email"} sx={{...InputStyle}} fullWidth/>
     <TextField label={"Message"} sx={{...InputStyle,}} multiline minRows={4} fullWidth/>
    <Button variant="outlined" sx={{"&.MuiButton-root":{borderColor:"#f1f1f1",color:"#fff"},}} color={"secondary"}>Submit</Button>
     </div>
    </div>
  )
}

export default Contact