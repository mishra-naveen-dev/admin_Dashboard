import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductDetails.css"; // Import the CSS file
import imgGe from "../../assets/imgKurta/01.webp";
import img8 from "../../assets/imgKurta/03.webp";
import img9 from "../../assets/imgKurta/04.webp";
import img4 from "../../assets/imgKurta/01.webp";

//icon import
import { FaStore } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdStorage } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { MdPublishedWithChanges } from "react-icons/md";

const img1 =
  "https://storage.googleapis.com/a1aa/image/t3Ir4KGoNABqGWVwwfuvaAE1Y79w5BTDkHwTnmyM5uw.jpg";
const img2 =
  "https://storage.googleapis.com/a1aa/image/y5HRx013kCdJrVONy1yikt6VYh4AWH5huF81e9h7kow.jpg";
const img3 =
  "https://storage.googleapis.com/a1aa/image/TkNX7hI0R-HrLntzBCq_Ku52NS0XZUqlS271HfdznXk.jpg";
const img5 =
  "https://storage.googleapis.com/a1aa/image/t3Ir4KGoNABqGWVwwfuvaAE1Y79w5BTDkHwTnmyM5uw.jpg";
const img6 =
  "https://storage.googleapis.com/a1aa/image/y5HRx013kCdJrVONy1yikt6VYh4AWH5huF81e9h7kow.jpg";
const img7 =
  "https://storage.googleapis.com/a1aa/image/TkNX7hI0R-HrLntzBCq_Ku52NS0XZUqlS271HfdznXk.jpg";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(imgGe);

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmalOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      <div className="productdashboardBoxWrapper product-right-content mx-auto">
        {/* Header */}
        <PageHeader pageName="Product View" />

        <div className="card container productDetailsSection">
          <div className="row">
            {/* left side */}
            <div className="col-md-5 ">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h5 className="mb-4 bold">Product Gallery</h5>
                <Slider {...productSliderOptions} className="slider-big mb-3">
                  <div className="item">
                    <img src={mainImage} alt="" className="main-image w-100" />
                  </div>
                </Slider>
                <Slider {...productSliderSmalOptions} className="slider-small">
                  <div className="item">
                    <img
                      src={img1}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img1)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img2}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img2)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img3}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img3)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img4}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img4)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img5}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img5)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img6}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img6)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img7}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img7)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img8}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img8)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={img9}
                      alt=""
                      className="slider-image w-100"
                      onMouseEnter={() => setMainImage(img9)}
                    />
                  </div>
                </Slider>
              </div>
            </div>

            {/* right side */}
            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-4">
                <h5 className="mb-4 bold">Product Details</h5>
                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>

                <div className="productInfo mt-3">
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <FaStore />
                      </span>
                      <span className="name">Brand </span>
                    </div>

                    <div className="col-sm-7">
                     : <span>Ecstasy</span>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Category </span>
                    </div>

                    <div className="col-sm-7">
                     : <span>Man's</span>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <IoMdColorPalette />
                      </span>
                      <span className="name">Color </span>
                    </div>

                    <div className="col-sm-7">
                     : <span>Red</span>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <MdOutlinePhotoSizeSelectLarge />
                      </span>
                      <span className="name">Size </span>
                    </div>

                    <div className="col-sm-7">
                      :<span>Ecstasy</span>
                    </div>
                  </div>
                  {/* 5 */}
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <FaIndianRupeeSign />
                      </span>
                      <span className="name">Price </span>
                    </div>

                    <div className="col-sm-7">
                      :<span>Ecstasy</span>
                    </div>
                  </div>

                  {/* 7 */}
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <FaStore />
                      </span>
                      <span className="name">Price </span>
                    </div>

                    <div className="col-sm-7">
                     : <span>Ecstasy</span>
                    </div>
                  </div>

                  {/* 8 */}

                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <MdStorage />
                      </span>
                      <span className="name">Stock </span>
                    </div>

                    <div className="col-sm-7">
                      :<span>Ecstasy</span>
                    </div>
                  </div>
                  {/* 9 */}
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <MdReviews />
                      </span>
                      <span className="name">Review </span>
                    </div>

                    <div className="col-sm-7">
                     : <span>Ecstasy</span>
                    </div>
                  </div>
                  {/* 10 */}
                  <div className="row mb-2">
                    <div className="col-sm-5 d-flex align-items-center ">
                      <span className="icon">
                        <MdPublishedWithChanges />
                      </span>
                      <span className="name">Published </span>
                    </div>

                    <div className="col-sm-7">
                     : <span>14 Jan 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
