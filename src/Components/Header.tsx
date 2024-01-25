import React from "react";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
        backgroundColor: "#2563eb",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="flex justify-center items-center w-1/2">
        <div className="w-10 h-10 p-10 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full flex justify-center items-center shadow-lg">
          <h1>
            AK<sup>2</sup>
          </h1>
        </div>
      </div>
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
