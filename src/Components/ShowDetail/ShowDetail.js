import React, {Component} from "react";
import data from "../Data/Data";
import Carousel from "../Carousel/Carousel";
import "./ShowDetail.css";
import {Link} from "react-router-dom";

class ShowDetail extends Component {
    state = {
        product: data,
    }

    onAddCart = (id) => {

        const index = this.state.product.findIndex(p => {
            return p.id === id;
        });
        let alreadyexist = false;
        const choosenproduct = this.state.product[index];
        if (localStorage.getItem('product_in_cart') !== null) {
            const data = JSON.parse(localStorage.getItem('product_in_cart'));

            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    alreadyexist = true;
                    break;
                }
            }
            if (alreadyexist === false) {
                data.push(choosenproduct);
                localStorage.setItem("product_in_cart", JSON.stringify(data));
            }
        }
         else {
            if (alreadyexist === false) {
                localStorage.setItem("product_in_cart", JSON.stringify(choosenproduct));
            }
        }
        const data = JSON.parse(localStorage.getItem('product_in_cart'));
        data.map((item, i) => {
            return (
                <div key={i}>
                    {console.log(item.productName)}
                </div>)
        })
    }

    render() {
        const index = this.state.product.findIndex(p => {
            return p.id === this.props.match.params.id;
        });
        const choosenproduct = this.state.product[index];
        const photos = choosenproduct.photos;
        let ratings = [];
        let countratings = 0;
        for (let i = 1; i <= choosenproduct.rating; i++) {
            ratings.push(<span className="fa fa-star checked"></span>);
            countratings++;
        }
        if (countratings < 5) {
            const remainingtstar = 5 - countratings;
            for (let i = 1; i <= remainingtstar; i++) {
                ratings.push(<span className="fa fa-star"></span>)
            }
        }

        return (<div className="MainProduct">
            <div className="ProductImages">
                <Carousel>
                    {photos.map((prodimage, i) => {
                        return (
                            <div key={i}>
                                <img className="ProductCarousel" src={prodimage}></img>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className="ProductDescription">
                <h1 className="ProductName">{choosenproduct.productName}</h1>
                <h3>{choosenproduct.description}</h3>

                {ratings}
                <div className="ProductPrice">Rs {choosenproduct.price}</div>
                <div className="ProductDetail">
                    <h4>Product Details</h4>
                    {choosenproduct.productDetail}
                </div>
                <div className="Buttons">
                    <Link to="/">
                        <button type="button" className="Continue btn btn-info"><i
                            className="fa fa-angle-double-left"></i> Continue
                        </button>
                    </Link>
                    <button type="button" className=" AddCartButton btn btn-primary"
                            onClick={(event) => this.onAddCart(choosenproduct.id)}><i
                        className="fa fa-shopping-cart"></i> Add to Cart
                    </button>

                </div>
            </div>
        </div>)
    }
}

export default ShowDetail;