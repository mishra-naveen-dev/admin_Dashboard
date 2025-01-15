import React, { useState, useEffect, useContext } from "react";
import { Chart } from "react-google-charts";
import { Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaUserCircle,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaEye,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import { HiOutlineShoppingCart, HiPencilAlt } from "react-icons/hi";
import { IoBagCheck } from "react-icons/io5";
import { GrStar } from "react-icons/gr";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DashboardBox from "./components/dashboardBox";
import { MyContext } from "../../App";
import "./dashboard.css";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TableComponent from "../../components/TableComponent";
import {
  data1,
  options1,
  data2,
  options2,
  pieData,
  pieOptions,
} from "./chartData";

const Dashboard = () => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const context = useContext(MyContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    context.setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const [showBy, setshowBy] = useState("");
  const [CatBy, setCatBy] = useState("");
  const [BrandBy, setbrandBy] = useState("");
  const [SearchBy, setSearchBy] = useState("");

  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event("resize"));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [context.isToggleSidebar]);

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                title="Total Users"
                value="277"
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                title="Total Orders"
                value="150"
                color={["#c012e2", "#eb64fe"]}
                icon={<HiOutlineShoppingCart />}
              />
              <DashboardBox
                title="Total Orders"
                value="120"
                color={["#2c78e5", "#60aff5"]}
                icon={<IoBagCheck />}
              />
              <DashboardBox
                title="Total Reviews"
                value="85"
                color={["#e1950e", "#f3cd29"]}
                icon={<GrStar />}
                grow={true}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h4 className="text-white mb-0 mt-0">Total Sales</h4>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}>
                    <BsThreeDotsVertical />
                  </Button>
                  <Menu
                    className="dropDown_menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                    }}
                  >
                    <MenuItem
                      key="lastDay"
                      selected={false}
                      onClick={handleClose}
                    >
                      Last Day
                    </MenuItem>
                    <MenuItem
                      key="lastWeek"
                      selected={false}
                      onClick={handleClose}
                    >
                      Last Week
                    </MenuItem>
                    <MenuItem
                      key="lastMonth"
                      selected={false}
                      onClick={handleClose}
                    >
                      Last Month
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
              <p className="text-white">$3,578.90 in last Month</p>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="200px"
                data={data2}
                options={options2}
                className="custom-chart"
              />
            </div>
          </div>
        </div>

        {/* tablecart */}
        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Product</h3>

          {/* filter */}
          {/* show by */}
          <div className="row cardFilters mt-3">
            <div className=" col col-md-3">
              <h4>SHOW BY</h4>
              <FormControl className="w-100" size="small">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-select-small-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* catergory by */}
            <div className=" col col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl className="w-100" size="small">
                <Select
                  value={CatBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-select-small-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* BRAND wise */}
            <div className=" col col-md-3">
              <h4>BRAND BY</h4>
              <FormControl className="w-100" size="small">
                <Select
                  value={BrandBy}
                  onChange={(e) => setbrandBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-select-small-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* Search by */}
            <div className=" col col-md-3">
              <h4>SEARCH BY</h4>
              <FormControl className="w-100" size="small">
                <Select
                  value={SearchBy}
                  onChange={(e) => setSearchBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-select-small-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* table */}
          <TableComponent />
        </div>
        {/* part4  */}
        <div className="boxChart">
          <div
            className="BoxChartWrapper"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <div
              style={{
                flex: "1 1 60%",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
                  Revenue Report
                </h2>

                <div className="row cardFilters mt-2 mr-3">
                  <FormControl className="w-100" size="small">
                    <Select
                      value={showBy}
                      onChange={(e) => setshowBy(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      labelId="demo-select-small-label"
                      className="w-100"
                      startAdornment={
                        <InputAdornment position="start">
                          <SlCalender
                            style={{ color: "#6c757d", fontSize: "24px" }}
                          />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="">
                        <em>Select option</em>
                      </MenuItem>
                      <MenuItem value={10}>2015</MenuItem>
                      <MenuItem value={20}>2016</MenuItem>
                      <MenuItem value={30}>2017</MenuItem>
                      <MenuItem value={10}>2018</MenuItem>
                      <MenuItem value={20}>2019</MenuItem>
                      <MenuItem value={30}>2020</MenuItem>
                      <MenuItem value={10}>2021</MenuItem>
                      <MenuItem value={20}>2022</MenuItem>
                      <MenuItem value={30}>2023</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="fas fa-briefcase"
                    style={{
                      color: "#4285F4",
                      fontSize: "24px",
                      marginRight: "10px",
                    }}
                  ></i>
                  <div>
                    <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                      Invested
                    </p>
                    <p style={{ fontSize: "24px", fontWeight: "600" }}>
                      3,387.67K
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="fas fa-bookmark"
                    style={{
                      color: "#34A853",
                      fontSize: "24px",
                      marginRight: "10px",
                    }}
                  ></i>
                  <div>
                    <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                      Earnings
                    </p>
                    <p style={{ fontSize: "24px", fontWeight: "600" }}>
                      2,856.35K
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="fas fa-box"
                    style={{
                      color: "#FBBC05",
                      fontSize: "24px",
                      marginRight: "10px",
                    }}
                  ></i>
                  <div>
                    <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                      Expenses
                    </p>
                    <p style={{ fontSize: "24px", fontWeight: "600" }}>
                      1,994.12K
                    </p>
                  </div>
                </div>
              </div>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="300px"
                data={data1}
                options={options1}
              />
            </div>
            <div
              style={{
                flex: "1 1 35%",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Orders Overview
              </h2>
              <Chart
                chartType="PieChart"
                width="100%"
                height="300px"
                data={pieData}
                options={pieOptions}
              />
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="fas fa-circle"
                      style={{ color: "#4285F4", marginRight: "10px" }}
                    ></i>
                    <span>Pending</span>
                  </div>
                  <span>547</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="fas fa-circle"
                      style={{ color: "#34A853", marginRight: "10px" }}
                    ></i>
                    <span>Shipped</span>
                  </div>
                  <span>398</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="fas fa-circle"
                      style={{ color: "#FBBC05", marginRight: "10px" }}
                    ></i>
                    <span>Received</span>
                  </div>
                  <span>605</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="fas fa-circle"
                      style={{ color: "#EA4335", marginRight: "10px" }}
                    ></i>
                    <span>Cancelled</span>
                  </div>
                  <span>249</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <i
                      className="fas fa-circle"
                      style={{ color: "#FABB05", marginRight: "10px" }}
                    ></i>
                    <span>Refunded</span>
                  </div>
                  <span>176</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
