import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import img1 from "../../assets/imgKurta/im1k.webp";
import Slider from "react-slick";

const ProductDetails = () => {
  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="productdashboardBoxWrapper product-right-content mx-auto">
        {/* Header */}
        <PageHeader pageName="Product View" />

        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <Slider {...productSliderOptions}>
                <div className="item">
                  <img src={img1} alt="" className="w-100" />
                </div>
              </Slider>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
