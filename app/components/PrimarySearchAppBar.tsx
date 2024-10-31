"use client";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import BurgerMenu from "./navigation/BurgerMenu";
import Profile from "./navigation/Profile";
import SearchComponent from "./navigation/SearchComponent";
import Link from "next/link";

export default function PrimarySearchAppBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "rgba(30,26,22)" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: "rgba(30,26,22)",
        }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}>
            <MenuIcon sx={{ fontSize: 35 }} />
          </IconButton>
          <Link href="/">
            <Typography
              variant="h4"
              noWrap
              fontWeight={900}
              sx={{
                letterSpacing: 1.5,
                display: { xs: "none", sm: "block" },
                p: 3,
              }}>
              Moderno Architect
            </Typography>
          </Link>

          <SearchComponent />

          <Box sx={{ flexGrow: 1 }} />

          <Profile />
        </Toolbar>
      </AppBar>

      <BurgerMenu open={open} />
    </Box>
  );
}
