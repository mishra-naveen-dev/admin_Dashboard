import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/imgKurta/im1k.webp";
import img2 from "../../assets/imgKurta/im2k.webp";
import img3 from "../../assets/imgKurta/im3k.webp";
import img4 from "../../assets/imgKurta/im4k.webp";
import img5 from "../../assets/imgKurta/im5k.webp";
import img6 from "../../assets/imgKurta/im6k.webp";
import img7 from "../../assets/imgKurta/im3k.webp";
import Slider from "react-slick";
import imgGe from "../../assets/imgKurta/01.webp";
import img8 from "../../assets/imgKurta/03.webp";
import img9 from "../../assets/imgKurta/04.webp";

const ProductDetails = () => {
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
    infinite: false,
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

        <div className="card">
          <div className="row">
            <div className="col-md-4 ml-3 pl-3 ">
              <div className="sliderWrapper">
                <Slider {...productSliderOptions}>
                  <div className="item">
                    <img src={imgGe} alt="" />
                  </div>
                </Slider>
                <Slider {...productSliderSmalOptions}>
                  <div className="item">
                    <img src={img8} alt="" className="slider-image2" />
                  </div>
                  <div className="item">
                    <img src={img9} alt="" className="slider-image2" />
                  </div>
                  <div className="item">
                    <img src={img1} alt="" className="slider-image" />
                  </div>
                  <div className="item">
                    <img src={img2} alt="" className="slider-image" />
                  </div>
                  <div className="item">
                    <img src={img3} alt="" className="slider-image" />
                  </div>
                  <div className="item">
                    <img src={img4} alt="" className="slider-image" />
                  </div>
                  <div className="item">
                    <img src={img5} alt="" className="slider-image" />
                  </div>
                  <div className="item">
                    <img src={img6} alt="" className="slider-image" />
                  </div>
                  <div className="item">
                    <img src={img7} alt="" className="slider-image" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
