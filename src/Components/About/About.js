import React from "react";
import Carousel from "../Carousel/CarouselWrapper";
import "../../style/About.scss";
import img from "../../Asset/carousel1.jpg";
const about=()=>{
    return(
<>
<Carousel></Carousel>
<section class="about_part section_padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="about_tittle">
                            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="single_about_part">
                            <img src="img/about_img_1.png" alt="#"/>
                            <h4>About Company</h4>
                            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="single_about_part">
                            <img src="img/about_img_2.png" alt="#"/>
                            <h4>Philosophy</h4>
                            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</>

    )
}

export default about;