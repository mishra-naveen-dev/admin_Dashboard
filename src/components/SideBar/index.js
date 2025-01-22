import React, { useState, useContext, lazy } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import "../../App.css";
import "./SideBar.css";
//icon
import { RiDashboardFill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { FaFileInvoice } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { IoDocument } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";
import { MdOutlineInfo } from "react-icons/md";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

import { MyContext } from "../../App";

const SideBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(0);

  const context = useContext(MyContext);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="sidebar ">
        <ul>
          <li>
            <Link to="/dashboard">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon ">
                  <RiDashboardFill />
                </span>
                Dashboard
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <BsFillBox2HeartFill />
              </span>
              Products
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/product">Product List</Link>
                </li>
                <li>
                  <Link to="/product/details">Product View</Link>
                </li>

                <li>
                  <Link to="/product/upload">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 2 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(2)}
            >
              <span className="icon">
                <FaUserAlt />
              </span>
              Login
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 2 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>

                <li>
                  <Link to="/signUp">Signup</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/orders">
              <Button
                className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <TbTruckDelivery />
                </span>
                Orders
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/invoices">
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <FaFileInvoice />
                </span>
                Invoices
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="icon">
                  <SiGooglemessages />
                </span>
                Messages
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(6)}
              >
                <span className="icon">
                  <MdNotifications />
                </span>
                Notification
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Button
                className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(7)}
              >
                <span className="icon">
                  <IoMdSettings />
                </span>
                Settings
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/charts">
              <Button
                className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <IoPieChartSharp />
                </span>
                Charts
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/documentation">
              <Button
                className={`w-100 ${activeTab === 9 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(9)}
              >
                <span className="icon">
                  <IoDocument />
                </span>
                Documentation
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button
                className={`w-100 ${activeTab === 10 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(10)}
              >
                <span className="icon">
                  <IoIosContacts />
                </span>
                Contact Us
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Button
                className={`w-100 ${activeTab === 11 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(11)}
              >
                <span className="icon">
                  <MdOutlineInfo />
                </span>
                About us
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 12 ? "active" : ""}`}
              onClick={handleClick}
            >
              <span className="icon">
                <FaLanguage />
              </span>
              Language
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Spanish</MenuItem>
              <MenuItem onClick={handleClose}>French</MenuItem>
              <MenuItem onClick={handleClose}>German</MenuItem>
            </Menu>
          </li>
          <br />
          <div className="logoutWrapper">
            <div className="logoutBox">
              <Button variant="contained">
                <FaUnlockKeyhole />
                Logout
              </Button>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
