import React, { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";
const App: React.FC = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const ToggleSidebar = () => {
    setSidebar(!isSidebarOpen);
  };
  const LinkItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Skills",
      link: "Skills",
    },
    {
      label: "Projects",
      link: "Projects",
    },
    {
      label: "Contact me",
      link: "contact me",
    },
  ];
  return (
    <div className="App-container h-screen w-full bg-white">
      <Header ToggleSidebar={ToggleSidebar} MenuItems={LinkItems} />
      {isSidebarOpen && (
        <SideBar LinkItems={LinkItems} setSidebar={setSidebar} />
      )}
      <Outlet />
    </div>
  );
};

export default App;
