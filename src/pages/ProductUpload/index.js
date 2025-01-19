import React from "react";
import "./ProductUpload.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useState } from "react";
//
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { IoMdCloudUpload } from "react-icons/io";

const ProductUpload = () => {
  const [categoryVal, setcategoryVal] = useState("");
  const [ratingValue, setRatingValue] = useState(1);

  const handleChangeCategory = (event) => {
    setcategoryVal(event.target.value);
  };
  return (
    <>
      <div className="productdashboardBoxWrapper product-right-content mx-auto">
        {/* Header */}
        <PageHeader pageName="Product Upload" />

        {/* upload */}
        <form className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <h5 className="mb-4">Basic Information</h5>
                <div className="form-group">
                  <h6>TITLE</h6>
                  <input type="text" placeholder="title..." />
                </div>
                <div className="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea
                    name=""
                    placeholder="Type here...."
                    rows={5}
                    cols={10}
                    id=""
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>BARAND</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>REGULAR PRICE</h6>
                      <input type="text" placeholder="title..." />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>DISCOUNT PRICE</h6>
                      <input type="text" placeholder="title..." />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>SHIPPING FEE</h6>
                      <input type="text" placeholder="title..." />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>TAX VALUE</h6>
                      <input type="text" placeholder="title..." />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>RATING</h6>
                      <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6> PRODUCT STOCK</h6>
                      <input type="text" placeholder="title..." />
                    </div>
                  </div>
                </div>
                <br />
                <Button className="btn-blue btn-lg btn-big">
                  <IoMdCloudUpload />
                &nbsp;  PULISH AND VIEW
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
