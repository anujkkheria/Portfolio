import React, {useState} from 'react'
import { Drawer,List,ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'
 
const SideBar:React.FC = () => {
 const [isActive,setIsActive]= useState<any>(0)
  const LinkItems =[
  {
    label:"Home",
    link:"/"
 },
  {
    label:"Skills",
    link:"Skills"
 },
  {
    label:"Projects",
    link:"Projects"
 },
  {
    label:"Contact me",
    link:"contact me"
 },
]
  return (
    <Drawer  variant='permanent'
    anchor='right'
    sx={{
        flexShrink: 0,

        [`& .MuiDrawer-paper`]: {
            mt:"4.5%",
            minWidth:"2vw",
            p:4,
            backgroundColor:'#fff',
            boxSizing: "border-box",
            }
        }}>
            <List>
    <span className='text-blue-600'>SideBar</span>
    {LinkItems.map((item,index)=>{return(<ListItemButton selected={isActive===index} onClick={()=>setIsActive(index)}>
     <Link to={item.link}>
     {item.label}
     </Link> 
    </ListItemButton>)})}
          </List>
    </Drawer>
  )
}


export default SideBar
// backgroundColor:'#2363EB