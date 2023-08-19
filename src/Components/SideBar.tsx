import React from 'react'
import { Drawer,List,ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
 
const SideBar:React.FC = () => {
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
    <ListItem >
     <Link to="/">
     Home
     </Link> 
    </ListItem>
    <ListItem>
      <Link to="skills">
Skills
      </Link>
    </ListItem>
    <ListItem>
<Link to="Projects">
      Projects
</Link>
    </ListItem>
    <ListItem>
      <Link to="contact me">
      Contact
      </Link>
    </ListItem>
          </List>
    </Drawer>
  )
}


export default SideBar
// backgroundColor:'#2363EB