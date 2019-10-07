import React from "react";
import "./Cart.css";

const cart = (props) => {
    return (

        <div className="item">
            <div className="deletebuttons">
                <span><i onClick={props.onDeleteHandler} className="fa fa-times"></i></span>
            </div>

            <div className="image">
                <img style={{height: 80 + "px"}} src={props.image}></img>
            </div>

            <div className="description">
                <h5>{props.description}</h5>
            </div>

            <div className="quantity">
                <button className="plus-btn" type="button" name="button" onClick={props.onIncrement}>
                    <i className="fa fa-plus"></i>
                </button>
                <input type="text" name="name" value={props.quantity} readOnly></input>
                <button className="minus-btn" type="button" name="button" onClick={props.onDecrement}>
                    <i className="fa fa-minus"></i>
                </button>
            </div>

            <div className="price">Rs {props.price}</div>
        </div>

    )
}

export default cart;