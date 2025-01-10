import React, { useState, useEffect, useContext } from "react";
import { Chart } from "react-google-charts";
import { Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart, HiPencilAlt } from "react-icons/hi";
import { IoBagCheck } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DashboardBox from "./components/dashboardBox";
import { data, options } from "./chartData"; // Assuming chartData.js contains the data and options
import { MyContext } from "../../App";
import "./dashboard.css";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";


//img
import img1 from "../../assets/image/skirtim1.webp";
import img2 from "../../assets/image/shirtmg2.webp";
import img3 from "../../assets/image/shoes.webp";
import img4 from "../../assets/image/jacketwomen.webp";
import img5 from "../../assets/image/menspent2.webp";
import img6 from "../../assets/image/menssweater1.jpg";
import img7 from "../../assets/image/pentsmens1.webp";
import img8 from "../../assets/image/womenpent.webp";
import img9 from "../../assets/image/womenpent2.webp";
import img10 from "../../assets/image/watche1.jpg";
import img11 from "../../assets/image/swearterwomen.webp";

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
            <div className="box graphBox ">
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
                className="custom-chart "
              />
            </div>
          </div>
        </div>

        {/* cart */}
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
          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark ">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>Product</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* 1 */}
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img1} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                {/* 2 */}
                <tr>
                  <td>#2</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img2} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Men's Casual Shirt...</h6>
                        <p>Men's exclusive casual shirt for summer</p>
                      </div>
                    </div>
                  </td>
                  <td>Men's</td>
                  <td>FashionHub</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$25.00</span>
                      <del className="old text-danger">$30.00</del>
                    </div>
                  </td>
                  <td>50</td>
                  <td>4.8(20)</td>
                  <td>420</td>
                  <td>$42k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#3</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img3} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Styling Shoes...</h6>
                        <p>Comfortable running shoes for all seasons</p>
                      </div>
                    </div>
                  </td>
                  <td>Unisex</td>
                  <td>ShoeMart</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$45.00</span>
                      <del className="old text-danger">$50.00</del>
                    </div>
                  </td>
                  <td>100</td>
                  <td>4.7(30)</td>
                  <td>500</td>
                  <td>$50k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#4</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img4} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Sweaters For Female...</h6>
                        <p>
                          Women's exclusive winter seasons and jersey set for
                          Female
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img5} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Formal Pent For Male...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#6</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img6} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Sweater for male...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#7</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img7} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Styling Pent...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>men</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#8</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img8} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Women Pent Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#9</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img9} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Touser for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Both </td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#10</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img10} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Watches ...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>All</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#11</td>
                  <td>
                    <div className="d-flex align-item-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={img11} alt="" srcset="" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2">
                        <h6>Sweater for Female...</h6>
                        <p>
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <span className="new">$19.00</span>
                      <del className="old text-danger">$21.00</del>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <HiPencilAlt />
                      </Button>
                      <Button className="error" color="error">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex   tableFooter">
              <p>
                showing<b> 12</b> of <b>60</b> reults
              </p>
              <Pagination
                count={10}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
