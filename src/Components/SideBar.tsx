import React, { useState } from "react";
import { Drawer, List, ListItemButton, ClickAwayListener } from "@mui/material";
import { Link as link } from "react-router-dom";

const SideBar: React.FC<any> = ({ LinkItems, setSidebar }) => {
  const [isActive, setIsActive] = useState<any>(0);

  return (
    <ClickAwayListener
      mouseEvent={"onMouseDown"}
      touchEvent={"onTouchStart"}
      onClickAway={() => {
        setSidebar((prev: boolean) => !prev);
      }}
    >
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            mt: "4rem",
            minWidth: "2vw",
            p: 4,
            backgroundColor: "#fff",
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {LinkItems.map((item: any, index: number) => {
            return (
              <ListItemButton
                key={item.label}
                component={link}
                selected={isActive === index}
                onClick={() => {
                  console.log(index);
                  setIsActive(index);
                }}
                to={item.link}
              >
                {item.label}
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </ClickAwayListener>
  );
};

export default SideBar;
// backgroundColor:'#2363EB
