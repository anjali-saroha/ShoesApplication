import React from "react";
import Slider from "react-slick";

const Carousel = (props) => {
    var settings = {
        infinite: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,

    };
    return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    );

}

export default Carousel;