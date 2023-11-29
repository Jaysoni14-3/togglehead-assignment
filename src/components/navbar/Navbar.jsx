import logo from "../../assets/LOGO@2x.png";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

import { useState } from "react";
import NavbarRight from "./NavbarRight";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="navbar-wrapper">
        <div className=" navbar-container">
          <div className="logo">
            <img width={96} src={logo} alt="logo" />
          </div>

          <div className="nav-hide">
            <NavbarRight direction={"row"} />
          </div>

          <div className="mobile-menu">
            <button onClick={toggleDrawer} className="mobile-menu-btn">
              <AiOutlineMenu color="white" size={32} />
            </button>
          </div>
        </div>
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="mobile-nav-drawer"
      >
        <div className="mobile-nav">
          <div className="header">
            <button onClick={toggleDrawer} className="mobile-menu-btn close">
              <AiOutlineClose color="white" size={32} />
            </button>
          </div>
          <div className="nav">
            <NavbarRight direction={"column"} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
