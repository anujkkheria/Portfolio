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
    <div className='App-container h-[100vh] p-1 bg-blue-600'>
    <Header ToggleSidebar={ToggleSidebar}/>
   {isSidebarOpen && <SideBar />}
   <Outlet />
    </div>
  )
}

export default App