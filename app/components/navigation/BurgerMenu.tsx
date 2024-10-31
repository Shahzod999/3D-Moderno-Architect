import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Link from "next/link";

const drawerWidth = 240;

const BurgerMenu = ({ open }: { open: boolean }) => {
  interface IconItem {
    icon: React.ReactNode;
    path: string;
  }
  interface Icons {
    [key: string]: IconItem;
  }
  const icons: Icons = {
    Portfolio: {
      icon: <BusinessCenterIcon />,
      path: "/portfolio",
    },
    Design: {
      icon: <DesignServicesIcon />,
      path: "/design",
    },
    About: {
      icon: <AutoStoriesIcon />,
      path: "/about",
    },
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}>
      <Divider sx={{ marginTop: { xs: "50px", sm: "80px" } }} />

      <List>
        {Object.keys(icons).map((text) => (
          <ListItem key={text} disablePadding>
            <Link
              href={icons[text].path}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}>
              <ListItemButton>
                <ListItemIcon>{icons[text].icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default BurgerMenu;
