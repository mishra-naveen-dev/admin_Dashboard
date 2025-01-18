import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import "./ProductDetails.css"; 
import imgGe from "../../assets/imgKurta/01.webp";
import img8 from "../../assets/imgKurta/03.webp";
import img9 from "../../assets/imgKurta/04.webp";
import img4 from "../../assets/imgKurta/01.webp";
import userImg from "../../assets/actors/01.webp";
import userImg2 from "../../assets/actors/02.webp";
import userImg3 from "../../assets/actors/03.webp";
import userImg4 from "../../assets/actors/05.webp";
import UserImg from "../../components/UserImg";
//

//icon import
import { FaStore } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdStorage } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { MdPublishedWithChanges } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { FaReply } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa";

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

                <div className="productInfo mt-4">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <FaStore />
                      </span>
                      <span className="name">Brand </span>
                    </div>

                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Category </span>
                    </div>

                    <div className="col-sm-9">
                      : <span>Man's</span>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <FaTags />
                      </span>
                      <span className="name">Tags </span>
                    </div>

                    <div className="col-sm-9">
                      :
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>PARTY</span>
                          </li>
                          <li className="list-inline-item">
                            <span>FORMAL</span>
                          </li>
                          <li className="list-inline-item">
                            <span>DRESS</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MEN </span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <IoMdColorPalette />
                      </span>
                      <span className="name">Color </span>
                    </div>

                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>RED</span>
                          </li>
                          <li className="list-inline-item">
                            <span>BLACK</span>
                          </li>
                          <li className="list-inline-item">
                            <span>BLUE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>GREY</span>
                          </li>
                          <li className="list-inline-item">
                            <span>GREEN </span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <MdOutlinePhotoSizeSelectLarge />
                      </span>
                      <span className="name">Size </span>
                    </div>

                    <div className="col-sm-9">
                      :
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SM</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MD</span>
                          </li>
                          <li className="list-inline-item">
                            <span>LG</span>
                          </li>
                          <li className="list-inline-item">
                            <span>XL</span>
                          </li>
                          <li className="list-inline-item">
                            <span>XXL </span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  {/* 5 */}
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaIndianRupeeSign />
                      </span>
                      <span className="name">Price </span>
                    </div>
                    <div className="col-sm-9">
                      :
                      <span>
                        <div style={{ width: "70px" }}>
                          <span className="new">
                            85.00 <del className="old text-danger">95.00</del>
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>

                  {/* 7 */}

                  {/* 8 */}

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <MdStorage />
                      </span>
                      <span className="name">Stock </span>
                    </div>

                    <div className="col-sm-9">
                      :<span>Ecstasy</span>
                    </div>
                  </div>
                  {/* 9 */}
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <MdReviews />
                      </span>
                      <span className="name">Review </span>
                    </div>

                    <div className="col-sm-9">
                      : <span>(03) Review</span>
                    </div>
                  </div>
                  {/* 10 */}
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center ">
                      <span className="icon">
                        <MdPublishedWithChanges />
                      </span>
                      <span className="name">Published </span>
                    </div>

                    <div className="col-sm-9">
                      : <span>14 Jan 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* downside */}
          <div className="p-4">
            <h5 className="mt-4 mb-3">Product Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus culpa voluptate commodi consequuntur vitae! Repudiandae,
              sequi praesentium odio iure ipsam sapiente fuga quidem eveniet
              quos dignissimos exercitationem ducimus id, repellendus iusto
              error labore ullam ipsa natus deserunt nisi facere? Laborum
              sapiente distinctio eligendi odit totam inventore fuga repellat
              doloremque est corrupti harum beatae sit error doloribus, magnam
              minima commodi fugiat autem! Dolorem esse, sequi est vero, culpa
              adipisci nulla nobis at expedita possimus rerum, assumenda
              quibusdam. Obcaecati facilis nostrum quos.
            </p>

            <br />

            <h5 className="mt-4 mb-4"> Rating Analytics</h5>
            <div className="ratingSection ">
              <div className="ratingrow d-flex align-items-center ">
                <span className="col1">5⭐ Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(22)</div>
              </div>
              <div className="ratingrow d-flex align-items-center ">
                <span className="col1">4⭐ Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(20)</div>
              </div>
              <div className="ratingrow d-flex align-items-center ">
                <span className="col1">3⭐ Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "66%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(18)</div>
              </div>
              <div className="ratingrow d-flex align-items-center ">
                <span className="col1">2⭐ Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "49%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(10)</div>
              </div>
              <div className="ratingrow d-flex align-items-center ">
                <span className="col1">1⭐ Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(01)</div>
              </div>
            </div>
            <br />
            <h5 className="mt-4 mb-4"> Customer Review</h5>
            <div className="reviewsSection">
              <div className="reviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImg img={userImg} lg={true} />
                        <div className="info pl-3">
                          <h6>John Deval</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        precision={0.5}
                        readOnly
                        className="starRating"
                        style={{ color: "#edb213" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ml-auto">
                        <FaReply />
                        &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus culpa voluptate commodi consequuntur vitae!
                    Repudiandae, sequi praesentium odio iure ipsam sapiente fuga
                    quidem eveniet quos dignissimos exercitationem ducimus.
                  </p>
                </div>
              </div>

              {/* reply comment */}
              <div className="reviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImg img={userImg2} lg={true} />
                        <div className="info pl-3">
                          <h6>John Deval</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={3.5}
                        precision={0.5}
                        readOnly
                        className="starRating"
                        style={{ color: "#edb213" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ml-auto">
                        <FaReplyAll />
                        &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus culpa voluptate commodi consequuntur vitae!
                    Repudiandae, sequi praesentium odio iure ipsam sapiente fuga
                    quidem eveniet quos dignissimos exercitationem ducimus.
                  </p>
                </div>
              </div>

              {/* main comment */}
              <div className="reviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImg img={userImg3} lg={true} />
                        <div className="info pl-3">
                          <h6>John Deval</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        precision={0.5}
                        readOnly
                        className="starRating"
                        style={{ color: "#edb213" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ml-auto">
                        <FaReply />
                        &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus culpa voluptate commodi consequuntur vitae!
                    Repudiandae, sequi praesentium odio iure ipsam sapiente fuga
                    quidem eveniet quos dignissimos exercitationem ducimus.
                  </p>
                </div>
              </div>
              {/* reply2 comment */}
              <div className="reviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImg img={userImg2} lg={true} />
                        <div className="info pl-3">
                          <h6>John Deval</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={3.5}
                        precision={0.5}
                        readOnly
                        className="starRating"
                        style={{ color: "#edb213" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ml-auto">
                        <FaReplyAll />
                        &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus culpa voluptate commodi consequuntur vitae!
                    Repudiandae, sequi praesentium odio iure ipsam sapiente fuga
                    quidem eveniet quos dignissimos exercitationem ducimus.
                  </p>
                </div>
              </div>
              <div className="reviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserImg img={userImg4} lg={true} />
                        <div className="info pl-3">
                          <h6>John Deval</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={3.5}
                        precision={0.5}
                        readOnly
                        className="starRating"
                        style={{ color: "#edb213" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg  btn-big ml-auto">
                        <FaReplyAll />
                        &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus culpa voluptate commodi consequuntur vitae!
                    Repudiandae, sequi praesentium odio iure ipsam sapiente fuga
                    quidem eveniet quos dignissimos exercitationem ducimus.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <h5 className="mt-4 mb-4"> Review Reply Form</h5>
            <form className="reviewForm">
              <textarea name="" placeholder="write here.... " className="mb-4"></textarea>
              <Button className="btn-blue btn-big btn-lg mt-2 w-100">
                drop your replies
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
