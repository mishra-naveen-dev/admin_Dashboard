import React, { useState } from "react";
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

const SideBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOpenSubmenu = () => {
    document.querySelector(".submenuWrapper").classList.toggle("open");
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard">
              <Button className="w-100">
                <span className="icon">
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
            <Button className="w-100" onClick={onOpenSubmenu}>
              <span className="icon">
                <BsFillBox2HeartFill />
              </span>
              Products
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>
            <div className="submenuWrapper">
              <ul className="submenu">
                <li>
                  <Link to="#">Product List</Link>
                </li>
                <li>
                  <Link to="#">Product View </Link>
                </li>
                <li>
                  <Link to="#">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/orders">
              <Button className="w-100">
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
              <Button className="w-100">
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
              <Button className="w-100">
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
              <Button className="w-100">
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
              <Button className="w-100">
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
              <Button className="w-100">
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
              <Button className="w-100">
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
              <Button className="w-100">
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
              <Button className="w-100">
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
            <Button className="w-100" onClick={handleClick}>
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
          <li>
            <Link to="/about">
              <Button className="w-100">
                <span className="icon">
                  <MdOutlineInfo />
                </span>
                Logout
                <span className="arrow"></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Button className="w-100">
                <span className="icon">
                  <MdOutlineInfo />
                </span>
                Logout
                <span className="arrow"></span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
