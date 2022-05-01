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
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const finalTheme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
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
          color: "#c9d1d9",
          fontSize: 14,
          fontWeight: "500",
          textTransform: "none",
          "&:hover": {
            color: "#ffffff",
            borderBottom: "#c9d1d9 1px solid",
          },
          "&.Mui-selected": {
            color: "#ffffff",
          },
        }),
      },
    },
  },
});


interface LinkTabProps {
  href?: string;
  label?: ReactJSXElement;
  icon?:ReactJSXElement;
  iconPosition?:"bottom"|"top"|"end"|"start";
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
                <LinkTab
                  icon={<MenuBookIcon />}
                  iconPosition="start"
                  label={
                    <>
                      Overview &nbsp;{" "}
                      <span className="badge  bg-secondary rounded-pill">
                        {}
                      </span>
                    </>
                  }
                />
                <LinkTab
                  // icon={<ClassOutlinedIcon />}
                  iconPosition="start"
                  label={
                    <>
                      Repositories &nbsp;{" "}
                      <span className="badge  bg-secondary rounded-pill">
                        {21}
                      </span>
                    </>
                  }
                />
                <LinkTab
                  icon={<BorderAllOutlinedIcon />}
                  iconPosition="start"
                  label={
                    <>
                      Projects &nbsp;{" "}
                      <span className="badge  bg-secondary rounded-pill">
                        {}
                      </span>
                    </>
                  }
                />
                <LinkTab
                  icon={<ViewInArOutlinedIcon />}
                  iconPosition="start"
                  label={
                    <>
                      Packages &nbsp;{" "}
                      <span className="badge  bg-secondary rounded-pill">
                        {}
                      </span>
                    </>
                  }
                />
                <LinkTab
                  icon={<StarBorderOutlinedIcon />}
                  iconPosition="start"
                  label={
                    <>
                      Stars &nbsp;{" "}
                      <span className="badge  bg-secondary rounded-pill">
                        {}
                      </span>
                    </>
                  }
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
