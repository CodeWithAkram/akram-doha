import React, { useContext } from "react";
import {
  FaFacebook,
  FaSistrix,
  FaFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaRegBell,
  FaCaretDown,
} from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { ContextProvider } from "../Global/Context";

const Navbar = () => {
  const { login, openForm, openProfile } = useContext(ContextProvider);

  const openLogin = () => {
    openForm();
  };
  console.log(openProfile);
  const openUserProfile = () => {
    openProfile();
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__first">
          <div className="navbar__first__logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          
        </div>
        <div className="navbar__middle">
        <div className="navbar__first__search">
            <input
              type="text"
              className="navbar__search"
              placeholder="Search "
            />
            <FaSistrix className="navbar__search__icon" />
          </div>
        </div>
        <div className="navbar__last">
          <span className="navbar__last_section">
            <FaPlus />
            <span className="navbar__last__section__add">Add</span>
          </span>
          
          <span className="navbar__last_section">
            <FaRegBell />
          </span>
          <span className="navbar__last_section">
            <FaUsers />
            <span className="navbar__notify">19</span>
          </span>
          <span className="navbar__last_section">
            <FaVideo />
            <span className="navbar__notify">5</span>
          </span>
         
          {/* <span className="navbar__last_section" onClick={openLogin}> */}
          <span className="navbar__last_section__img">
            <img src="/images/akram.jpeg" alt="akram khan" />
          </span>
          <span className="navbar__last_section" onClick={openUserProfile}>
            <FaCaretDown />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
