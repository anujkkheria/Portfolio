import React, { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
const App: React.FC = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [activePage, setActivePage] = useState(useLocation().pathname);

  const ToggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  const LinkItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Skills",
      link: "/Skills",
    },
    {
      label: "Projects",
      link: "/Projects",
    },
    {
      label: "Contact me",
      link: "/contact me",
    },
  ];

  return (
    <div className="App-container h-screen w-full box-border  bg-white">
      <Header
        ToggleSidebar={ToggleSidebar}
        MenuItems={LinkItems}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      {isSidebarOpen && (
        <SideBar
          LinkItems={LinkItems}
          setSidebar={setSidebar}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
      <Outlet />
    </div>
  );
};

export default App;
