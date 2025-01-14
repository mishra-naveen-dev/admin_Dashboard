import "../Dashboard/dashboard.css";
import "../../App.css";
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import TableComponent from "../../components/TableComponent";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FaShoppingBag, FaGift, FaCheckCircle } from "react-icons/fa";
import "./product.css"; // Assuming you have a CSS file for additional styles
import PageHeader from "../../components/PageHeader/PageHeader";

const ProductList = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Your resize logic here
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showBy, setshowBy] = useState("");
  const [CatBy, setCatBy] = useState("");
  const [BrandBy, setbrandBy] = useState("");
  const [SearchBy, setSearchBy] = useState("");

  return (
    <div className="productdashboardBoxWrapper product-right-content mx-auto">
      {/* Header */}
      <PageHeader pageName="Product List" />

      {/* Stats Cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Products */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow card-border">
          <div className="icon absolute -top-4 right-4 text-blue-300">
            <FaShoppingBag size="2em" />
          </div>
          <div>
            <div className="text-4xl font-bold">547</div>
            <div className="text-lg">Total Products</div>
          </div>
        </div>
        {/* Total Categories */}
        <div className="relative bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg shadow card-border">
          <div className="icon absolute -top-4 right-4 text-green-300">
            <FaGift size="2em" />
          </div>
          <div>
            <div className="text-4xl font-bold">605</div>
            <div className="text-lg">Total Categories</div>
          </div>
        </div>
        {/* Total Brands */}
        <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow card-border">
          <div className="icon absolute -top-4 right-4 text-pink-300">
            <FaCheckCircle size="2em" />
          </div>
          <div>
            <div className="text-4xl font-bold">249</div>
            <div className="text-lg">Total Brands</div>
          </div>
        </div>
      </div>
      {/* tablecart */}
      <div className="card shadow border-0 p-3 mt-4">
        <h3 className="hd">Best Selling Product</h3>

        {/* filter */}
        {/* show by */}
        <div className="row cardFilters mt-3">
          <div className="col col-md-3">
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
          {/* CATEGORY BY */}
          <div className="col col-md-3">
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
          {/* BRAND BY */}
          <div className="col col-md-3">
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
          {/* SEARCH BY */}
          <div className="col col-md-3">
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
  );
};

export default ProductList;
