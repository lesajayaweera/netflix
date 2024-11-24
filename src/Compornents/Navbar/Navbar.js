import React from 'react'
import "./NavBar.css"
import logo  from "../../images/netflix.png";
import profilePic from "../../images/profile-pic.jpg";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img className="logo" src={logo} />
                <p className="">Home</p>
                <p className="">Tv Shows</p>
                <p className="">Moives</p>
                <p className="">New & Popular</p>
                <p className="">My Lists</p>
            </div>
            
            <div className="right">
              <img className="profile-pic" src={profilePic} />
            </div>
        </div>
    </div>
  )
}
export default Navbar;
