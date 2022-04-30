import React from "react";
import "./Navigation.css";
import logo from "../../assets/img/logo.svg";
import profilePix from "../../assets/img/imgPlaceholder.jpeg"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navigation = () => {
  return (
    <div className="Nav-container">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Pull request
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Issues
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Marketplace</a>
              </li>
            </ul>
            
              <div className="Nav-icon">
                  <NotificationsOutlinedIcon />
                  <AddOutlinedIcon />
                  <img src={profilePix} alt="" />
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
