import React,{useState} from 'react'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
// import { Outlet } from 'react-router-dom'
import Hero from './Components/Hero'
const App:React.FC = () => {
  const [isSidebarOpen,setSidebar] = useState(false)
  const ToggleSidebar = () =>{
    setSidebar(!isSidebarOpen)
  }
  return (
    <>
    <Header ToggleSidebar={ToggleSidebar}/>
   {isSidebarOpen && <SideBar />}
   <Hero />
    </>
  )
}

export default App