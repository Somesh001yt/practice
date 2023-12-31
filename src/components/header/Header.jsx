import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../../assests/logo.png";
import Profile from "../../assests/profile.png";
import { IonIcon } from "@ionic/react";
import DropdownProfile from "../DropdownProfile";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openprofile, setOpenprofile] = useState(false);

  const closeDropdown = () => {
    console.log("click");
    setOpenprofile((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="header">
        <div
          className="text-3xl mt-6 ml-4 md:hidden "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        <div className="left-side">
          <img className="logo mx-auto md:mx-0" src={Logo} alt="logo" />

          <ul>
            <li className="header-list">
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="header-list">
              <NavLink activeClassName="active" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="header-list">
              <a href="/">Search</a>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <div className="flex mr-2 lg:mr-10     ">
            <h4>Jane Doe</h4>
            <div
              className="mt-8 ml-2"
              onClick={() => setOpenprofile((prev) => !prev)}
            >
              {" "}
              <ion-icon name="caret-down-outline"></ion-icon>
            </div>
          </div>
          <div
            onClick={() => setOpenprofile((prev) => !prev)}
            className="image   mr-8 lg:mr-24"
          >
            <img src={Profile} alt="profile" />
          </div>
        </div>
      </div>
      <div>
        <ul
          className={`md:hidden bg-primary z-10 absolute top-[5.1rem] w-full h-full bottom-0 py-24  pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%] "
          }`}
        >
          <li className=" text-center text-lg mb-8">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" text-center text-lg mt-8">
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li className=" text-center text-lg mt-8">
            <a href="/">Search</a>
          </li>
        </ul>
      </div>

      {openprofile && <DropdownProfile closeFunction={() => closeDropdown()} />}
    </div>
  );
};

export default Header;
