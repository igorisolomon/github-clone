import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  experimental_sx as sx,
} from "@mui/material/styles";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import './SecNav.css'

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const finalTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#f78166",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: sx({
          color: "#ffffff",
          fontSize: 14,
          fontWeight: "400",
          "&:hover": {
            color: "#ffffff",
            borderBottom: "#c9d1d9 1px solid",
          },
        }),
        selected: {
          color: "#ffffff",
        },
      },
    },
  },
});

const SecNav = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={finalTheme}>
      <div className="row SecNav-tab">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
          <Box className="SecNav-tab">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <Tab
            icon={<MenuBookIcon />}
            iconPosition="start"
            label="Overview"
            href="/drafts"
          />
          <Tab
            icon={<ClassOutlinedIcon />}
            iconPosition="start"
            label="Repositories"
            href="/trash"
          />
          <Tab
            icon={<BorderAllOutlinedIcon />}
            iconPosition="start"
            label="Projects"
            href="/spam"
          />
          <Tab
            icon={<ViewInArOutlinedIcon />}
            iconPosition="start"
            label="Packages"
            href="/trash"
          />
          <Tab
            icon={<StarBorderOutlinedIcon />}
            iconPosition="start"
            label="Stars"
            href="/spam"
          />
        </Tabs>
      </Box>
          </div>
      </div>
    </ThemeProvider>
  );
};

export default SecNav;
