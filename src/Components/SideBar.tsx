import React from 'react'
import { Drawer,List } from '@mui/material'

 
const SideBar:React.FC = () => {
  return (
    <Drawer  variant='permanent'
    anchor='right'
    sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            mt:'3.5rem',
            width:'20vw',
            backgroundColor:'#2363EB',
            boxSizing: "border-box",
            }
        }}>
            <List>
    <span className='text-white'>SideBar</span>
          </List>
    </Drawer>
  )
}

export default SideBar