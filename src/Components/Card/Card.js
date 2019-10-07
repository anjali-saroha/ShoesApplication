import React, {Component} from "react";
import "./Card.css";
import {ProductCard} from "react-ui-cards";
import data from "../Data/Data";

class Card extends Component {

    onAddCart = (id) => {
        console.log("choose" + id);
    }

    render() {
        const products = data;
        return (
            <div className="container">
                <div className="row">
                    {products.map((prod, i) => {
                        const url = "/" + prod.id;
                        return (
                            <ProductCard key={i} className="column" onClick={(event) => this.onAddCart(prod.id)}
                                         productName={prod.productName}
                                         description={prod.description}
                                         photos={prod.photos}
                                         price={"Rs " + prod.price}
                                         rating={prod.rating}
                                         buttonText="BUYNOW"
                                         url={url}>
                            </ProductCard>

                        )
                    })}
                </div>
            </div>)
    }
}

export default Card;