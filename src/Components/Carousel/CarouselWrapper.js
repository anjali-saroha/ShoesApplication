import React from "react";
import "./Carousel.css";
import Carousel from "../Carousel/Carousel";
import Carousel1 from '../../Asset/carousel1.jpg'
import Carousel2 from '../../Asset/carousel2.jpg'
import Carousel3 from '../../Asset/carousel3.jpg'
import Carousel4 from '../../Asset/carousel4.jpg'
import Carousel5 from '../../Asset/carousel5.jpg'
import Carousel6 from '../../Asset/carousel6.jpg'

const carouselWrapper = () => {
    return (
        <div className="divfirst">
            <Carousel>
                <div>
                    <img className="divImage" src={Carousel1}></img>
                </div>
                <div>
                    <img className="divImage" src={Carousel2}></img>
                </div>
                <div>
                    <img className="divImage" src={Carousel3}></img>
                </div>
                <div>
                    <img className="divImage" src={Carousel4}></img>
                </div>
                <div>
                    <img className="divImage" src={Carousel5}></img>
                </div>
                <div>
                    <img className="divImage" src={Carousel6}></img>
                </div>
            </Carousel>
        </div>
    )
}

export default carouselWrapper;