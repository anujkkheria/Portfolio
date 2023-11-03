import React, { useState, useEffect } from "react";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../assets/Free_Sample_By_Wix.jpg";
import { AppBar, IconButton, List, ListItemButton } from "@mui/material";
const Header: React.FC<any> = ({ ToggleSidebar, MenuItems }) => {
  const [Mobile, setIsMobile] = useState(0);
  const [isActive, setIsActive] = useState<number>(0);
  useEffect(() => {
    screen.width < 700 ? setIsMobile(1) : setIsMobile(0);
    console.log(Mobile);
  }, []);
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        height: "10vh",
        backgroundColor: "#010101",
      }}
    >
      <img src={Logo} alt="Logo" className="self-center w-24" />
      <div className="flex  items-center sm:hidden">
        <IconButton onClick={() => ToggleSidebar()}>
          <Menu sx={{ fill: "#F6F6f6" }} />
        </IconButton>
      </div>
      <div className="w-[50rem] self-center hidden sm:block">
        <List sx={{ display: "flex" }}>
          {MenuItems.map((Item: any, index: number) => {
            return (
              <ListItemButton
                component={Link}
                to={Item.link}
                key={Item.label}
                selected={isActive === index}
                onClick={() => setIsActive(index)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&.Mui-selected": {
                    color: "#000",
                    backgroundColor: "#fff",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                }}
              >
                {Item.label}
              </ListItemButton>
            );
          })}
        </List>
      </div>
    </AppBar>
  );
};

export default Header;
