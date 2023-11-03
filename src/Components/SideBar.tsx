import React, { useState } from "react";
import { Drawer, List, ListItemButton } from "@mui/material";
import { Link as link } from "react-router-dom";

const SideBar: React.FC<any> = ({ LinkItems }) => {
  const [isActive, setIsActive] = useState<any>(0);

  return (
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
  );
};

export default SideBar;
// backgroundColor:'#2363EB
