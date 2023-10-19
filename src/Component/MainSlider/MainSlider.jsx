import React from "react";
import './MainSlider.module.css'
import Slider from "react-slick";

import slider1 from "../../Assets/images/slider-image-1.jpeg";
import slider2 from "../../Assets/images/slider-image-2.jpeg";
import slider3 from "../../Assets/images/slider-image-3.jpeg";
import img1 from "../../Assets/images/grocery-banner.png";
import img2 from "../../Assets/images/grocery-banner-2.jpeg";
import img3 from "../../Assets/images/slider-2.jpeg";
export default function MainSlider() {

  var settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return <>
  <div className="row g-0 my-3">
        <div className="col-md-10">
          <Slider {...settings}>
            <img className="w-100" height={500} src={slider1} alt="" />

            <img className="w-100" height={500} src={slider2} alt="" />

            <img className="w-100" height={500} src={slider3} alt="" />
          </Slider>
        </div>
        <div className="col-md-2 ">
          <img className="w-100" height={250} src={img1} alt="" />
          <img className="w-100" height={250} src={img2} alt="" />
        </div>
      </div>
  
  
  </>
}
