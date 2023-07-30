import React,{useState} from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import { Outlet } from 'react-router-dom'
const App:React.FC = () => {
  const [isSidebarOpen,setSidebar] = useState(false)
  const ToggleSidebar = () =>{
    setSidebar(!isSidebarOpen)
  }
  return (
    <>
    <Header ToggleSidebar={ToggleSidebar}/>
   {isSidebarOpen && <SideBar />}
   <Outlet />
    </>
  )
}

export default App