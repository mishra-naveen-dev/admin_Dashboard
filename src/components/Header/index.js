import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import Button from "@mui/material/Button";
import React, { useState, useContext } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUserShield } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { MyContext } from "../../App";
import SearchBox from "../SearchBox";


import UserImg from "../UserImg"; 

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNoticfication = Boolean(isOpennotificationDrop);

  const context = useContext(MyContext);

  const toggleSidebar = () => {
    context.setIsToggleSidebar(!context.isToggleSidebar);
  };

  const handleOpenMyAcc = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setisOpennotificationDrop(true);
  };
  const handleClosenotificationsDrop = () => {
    setisOpennotificationDrop(false);
  };

  const [isOpenEmailDrop, setIsOpenEmailDrop] = useState(null);
  const openEmailMenu = Boolean(isOpenEmailDrop);
  const handleOpenEmailDrop = (event) => {
    setIsOpenEmailDrop(event.currentTarget);
  };
  const handleCloseEmailDrop = () => {
    setIsOpenEmailDrop(null);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          <div className="col-sm-2 part1">
            <Link to={"/dashboard"} className="d-flex align-items-center logo">
              {" "}
              {/* Updated link */}
              <img src={logo} alt="402" />
              <span className="ml-2">RAJWADASTORE</span>
            </Link>
          </div>
          <div className="col-sm-3 d-flex align-items-center part2 ">
            <Button className="rounded-circle mr-3" onClick={toggleSidebar}>
              {context.isToggleSidebar ? (
                <AiOutlineMenuFold />
              ) : (
                <AiOutlineMenuUnfold />
              )}
            </Button>
            <SearchBox className="" />
          </div>
          <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
            <Button
              className="rounded-circle mr-3"
              onClick={() => context.setThemeMode(!context.themeMode)}
            >
              <CiLight />
            </Button>
            <Button className="rounded-circle mr-3">
              <FaCartShopping />
            </Button>
            <div className="dropdownWrapper position-relative">
              <Button
                className="rounded-circle mr-3"
                onClick={handleOpenEmailDrop}
              >
                <MdOutlineMailOutline />
              </Button>
              <Menu
                anchorEl={isOpenEmailDrop}
                id="email"
                className="email dropdown_list"
                open={openEmailMenu}
                onClose={handleCloseEmailDrop}
                onClick={handleCloseEmailDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head pl-3 pb-0">
                  <h4>Emails (5)</h4>
                </div>
                <Divider className="mb-1" />
                <div className="menu-scroll-container">
                  <MenuItem onClick={handleCloseEmailDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>John Doe</b> sent you an email:
                            <b> "Regarding the project..."</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">5 minutes ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEmailDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Jane Smith</b> replied to your message:
                            <b> "Thanks for the update!"</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">10 minutes ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEmailDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Jane Smith</b> replied to your message:
                            <b> "Thanks for the update!"</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">10 minutes ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEmailDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Jane Smith</b> replied to your message:
                            <b> "Thanks for the update!"</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">10 minutes ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseEmailDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Jane Smith</b> replied to your message:
                            <b> "Thanks for the update!"</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0">10 minutes ago</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="pl-3 pr-3  pt-3 pb-1">
                  <Button className="btn-white w-100 align-self-center">
                    View all emails
                  </Button>
                </div>
              </Menu>
            </div>
            <div className="dropdownWrapper">
              <Button
                className="rounded-circle mr-3"
                onClick={handleOpennotificationsDrop}
              >
                <IoMdNotifications />
              </Button>
              <Menu
                anchorEl={isOpennotificationDrop}
                id="notifications"
                className="notifications dropdown_list"
                open={openNoticfication}
                onClose={handleClosenotificationsDrop}
                onClick={handleClosenotificationsDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom-end" }}
              >
                <div className="head pl-3 pb-0">
                  <h4>Orders(12)</h4>
                </div>
                <Divider className="mb-1" />
                <div className="menu-scroll-container">
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Neeraj</b> added to his favorite list
                            <b> Lather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0"> few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Neeraj</b> added to his favorite list
                            <b> Lather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0"> few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Neeraj</b> added to his favorite list
                            <b> Lather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0"> few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Neeraj</b> added to his favorite list
                            <b> Lather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0"> few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Neeraj</b> added to his favorite list
                            <b> Lather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0"> few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Neeraj</b> added to his favorite list
                            <b> Lather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0"> few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex ">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img
                              src="https://www.w3schools.com/howto/img_avatar.png"
                              alt="user"
                            />
                          </span>
                        </div>
                      </div>

                      <div className="dropdownInfo">
                        <h4>
                          <span>
                            <b>Neeraj</b> added to his favorite list
                            <b> Lather belt steve madden</b>
                          </span>
                        </h4>
                        <p className="text-sky mb-0"> few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="pl-3 pr-3 w-100 pt-3 pb-1">
                  <Button className="btn-blue w-100 ">
                    View all notifications
                  </Button>
                </div>
              </Menu>
            </div>

            {/* myacc */}
            {context.isLogin === false ? (
              <Link to={"/login"}>
                <Button className="btn-blue btn-lg btn-round">Sign In</Button>
              </Link>
            ) : (
              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAcc}
                >
                  <UserImg img="https://www.w3schools.com/howto/img_avatar.png" />
                  <div className="userInfo">
                    <h4>Neeraj Mishra</h4>
                    <p className="  mb-0">@neerajm47</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <CgProfile />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon FaUserShield>
                      <FaUserShield />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <RiLogoutCircleRLine />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
