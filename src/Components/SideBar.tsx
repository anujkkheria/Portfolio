import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ClickAwayListener,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link as link } from "react-router-dom";

const SideBar: React.FC<any> = ({
  LinkItems,
  setSidebar,
  activePage,
  setActivePage,
}) => {
  return (
    <ClickAwayListener
      mouseEvent={"onMouseDown"}
      touchEvent={"onTouchStart"}
      onClickAway={() => {
        setSidebar(false);
      }}
    >
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            minWidth: "2vw",
            p: 4,
            backgroundColor: "#fff",
            boxSizing: "border-box",
          },
        }}
      >
        <IconButton
          disableRipple
          onClick={() => setSidebar((prev: boolean) => !prev)}
        >
          <Close />
        </IconButton>
        <List>
          {LinkItems.map((item: any, index: number) => {
            return (
              <ListItemButton
                key={index}
                component={link}
                selected={activePage === item.link}
                onClick={() => {
                  console.log(index);
                  setActivePage(item.link);
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
