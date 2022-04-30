import React, { useState } from "react";
import { Badge, Box, Tab, Tabs } from "@mui/material";
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
import "./SecNav.css";

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
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={finalTheme}>
      <div className="container">
        <div className="row SecNav-tab">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <Box className="SecNav-tab">
              <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
                <Tab
                  icon={<MenuBookIcon />}
                  iconPosition="start"
                  label={<>Overview &nbsp; <span className="badge  bg-secondary rounded-pill">{}</span></>}
                  href="/drafts"
                />
                <Tab
                  icon={<ClassOutlinedIcon />}
                  iconPosition="start"
                  label={<>Repositories &nbsp; <span className="badge  bg-secondary rounded-pill">{21}</span></>}
                  href="/trash"
                />
                <Tab
                  icon={<BorderAllOutlinedIcon />}
                  iconPosition="start"
                  label={<>Projects &nbsp; <span className="badge  bg-secondary rounded-pill">{}</span></>}
                  href="/spam"
                />
                <Tab
                  icon={<ViewInArOutlinedIcon />}
                  iconPosition="start"
                  label={<>Packages &nbsp; <span className="badge  bg-secondary rounded-pill">{}</span></>}
                  href="/trash"
                />
                <Tab
                  icon={<StarBorderOutlinedIcon />}
                  iconPosition="start"
                  label={<>Stars &nbsp; <span className="badge  bg-secondary rounded-pill">{}</span></>}
                  href="/spam"
                />
              </Tabs>
            </Box>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SecNav;
