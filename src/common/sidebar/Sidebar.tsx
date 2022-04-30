import React from "react";
import "./Sidebar.css";
import { Bttn } from "../button/Button";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import profilPix from "../../assets/img/imgPlaceholder.jpeg";
import badge from "../../assets/img/badge.png";
import avatar from "../../assets/img/avatar.png";

const Sidebar = () => {
  return (
    <>
      <div className="Sidebar-profile-pic">
        <img className="img-fluid" src={profilPix} alt="profile picture" />
      </div>
      <div className="Sidebar-profile-name">
        <h1>Solomon Igori</h1>
        <h3>igorisolomon</h3>
      </div>
      <div className="Sidebar-button">
        <Bttn title="Edit Profile" bgColor="#282e33" />
      </div>
      <div className="follow">
        <PeopleOutlinedIcon /> <span>{7}</span> followers · <span>{12}</span>{" "}
        following
      </div>
      <div className="location">
        <LocationOnOutlinedIcon /> <span>{"Nigeria"}</span>
      </div>
      <hr />
      <div className="achievements">
        <h2 className="Sidebar-subtitle">Achievements</h2>
        <img src={badge} alt="" />
      </div>
      <hr />
      <div className="highlights">
        <h2 className="Sidebar-subtitle">Hightlights</h2>
        <StarBorderOutlinedIcon />{" "}
        <span className="badge rounded-pill">PRO</span>
      </div>
      <hr />
      <div className="org">
        <h2 className="Sidebar-subtitle">Organisations</h2>
        <img src={avatar} alt={"organisation"} />
        <img src={avatar} alt={"organisation"} />
        <img src={avatar} alt={"organisation"} />
        <img src={avatar} alt={"organisation"} />
      </div>
    </>
  );
};

export default Sidebar;
