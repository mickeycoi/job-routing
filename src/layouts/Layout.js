import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
