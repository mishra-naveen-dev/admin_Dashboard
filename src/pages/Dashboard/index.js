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
import { HiOutlineShoppingCart, HiPencilAlt } from "react-icons/hi";
import { IoBagCheck } from "react-icons/io5";
import { GrStar } from "react-icons/gr";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DashboardBox from "./components/dashboardBox";
import { data, options } from "./chartData"; // Assuming chartData.js contains the data and options
import { MyContext } from "../../App";
import "./dashboard.css";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import TableComponent from "../../components/TableComponent";


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
                data={data}
                options={options}
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
      </div>
    </>
  );
};

export default Dashboard;
