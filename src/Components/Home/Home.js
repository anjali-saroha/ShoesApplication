import React, {Component} from "react";
import Carousel from "../Carousel/CarouselWrapper";
import Card from "../Card/Card";

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Card/>
            </div>
        )
    }
}

export default Home;