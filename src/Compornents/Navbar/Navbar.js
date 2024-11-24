import React from 'react'
import { useState } from 'react';
import "./NavBar.css"
import logo  from "../../images/netflix.png";
import profilePic from "../../images/profile-pic.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Navbar = () => {
  const [scrolled,setScrolled] = useState(false);
  window.onscroll =()=>{
    setScrolled(window.scrollY === 0 ? false : true);
    console.log(window.scrollY);  
    return ()=> (window.onscroll= null)
  }
  
  
  return (
    <div className= {scrolled ? "navbar-scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img className="logo" src={logo} alt="Netflix-Image" />
          <p className="">Home</p>
          <p className="">Tv Shows</p>
          <p className="">Moives</p>
          <p className="">New & Popular</p>
          <p className="">My Lists</p>
        </div>

        <div className="right">
          <SearchIcon className="icons" />
          <NotificationsIcon className="icons" />
          <div className="image-profile-main-container">
            <img className="profile-pic" src={profilePic} alt="Profile-image" />
            <div className=".profile-container">
              <ArrowDropDownIcon className="icons" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
