import React from "react";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../assets/Free_Sample_By_Wix.jpg";
import { AppBar, IconButton, List, ListItemButton } from "@mui/material";
const Header: React.FC<any> = ({
  ToggleSidebar,
  MenuItems,
  activePage,
  setActivePage,
}) => {
  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        height: "10vh",
        backgroundColor: "#010101",
        overflow: "hidden",
      }}
    >
      <img src={Logo} alt="Logo" className="self-center w-16 box-border" />
      <div className="flex  items-center sm:hidden">
        <IconButton onClick={() => ToggleSidebar()}>
          <Menu sx={{ fill: "#F6F6f6" }} />
        </IconButton>
      </div>
      <div className="w-[50rem] self-center hidden sm:block">
        <List sx={{ display: "flex" }}>
          {MenuItems.map((Item: any) => {
            return (
              <ListItemButton
                component={Link}
                to={Item.link}
                key={Item.label}
                selected={activePage === Item.link}
                onClick={() => setActivePage(Item.link)}
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
