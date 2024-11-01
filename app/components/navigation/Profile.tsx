import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import { Badge } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import { logout } from "@/lib/actions/authAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectedStatusUser, userLogOut } from "@/lib/features/userInfoSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectedStatusUser);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = async () => {
    logout();
    dispatch(userLogOut());
  };

  console.log(userInfo, "info");

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: 5 }}>
      {userInfo ? (
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      ) : (
        <Link href="/protectedPages/profile">
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        </Link>
      )}

      <Link href="/protectedPages/user">
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ mt: 5 }}>
      <Link href="/protectedPages/user">
        <MenuItem>
          <IconButton size="large" aria-label="show 0 new mails" color="inherit">
            <Badge badgeContent={0} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
      </Link>
      <Link href="/protectedPages/user">
        <MenuItem>
          <IconButton size="large" aria-label="show 0 new notifications" color="inherit">
            <Badge badgeContent={0} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
      </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton size="large" aria-label="show 0 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" aria-label="show 0 new notifications" color="inherit">
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
          <AccountCircle />
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" aria-label="show more" aria-controls={menuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
          <MoreIcon />
        </IconButton>
      </Box>

      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default Profile;
