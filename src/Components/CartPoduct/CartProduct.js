import React, {Component} from "react";
import Cart from "../Cart/Cart";
import "./CartProduct.css";
import {Link} from "react-router-dom";

class CartProduct extends Component {
    state = {
        product_in_cart: [],
        totalprice: 0,
        showCart:false
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('product_in_cart'));
        if(data.length > 0){
        const quantity = 1;
        let totalprice = this.state.totalprice;
        data.map((item, i) => {
            return (
                <div key={i}>
                    {console.log(item.productName)}
                    {item.quantity = quantity}
                    {item.quantityprice = item.price}
                    {totalprice = totalprice + item.price};
                    {this.setState({totalprice: totalprice})}
                </div>)
        });
        this.setState({product_in_cart: data});
        this.setState({showCart:true})
         }
    }


    onDeleteHandler = id => {
        const index = this.state.product_in_cart.findIndex(p => {
            return p.id === id;
        });
        const deleteproduct = this.state.product_in_cart[index];
        const product_in_cart = this.state.product_in_cart;
        product_in_cart.splice(index, 1);
        let totalprice = this.state.totalprice;
        totalprice = totalprice - deleteproduct.quantityprice;
        this.setState({totalprice: totalprice});
        this.setState({product_in_cart: product_in_cart});
        localStorage.setItem("product_in_cart", JSON.stringify(this.state.product_in_cart));
        if(this.state.totalprice === 0){
            this.setState({showCart:false})
        }
    };

    onIncrement = id => {
        const index = this.state.product_in_cart.findIndex(p => {
            return p.id === id;
        });
        const choosenproduct = this.state.product_in_cart[index];
        choosenproduct.quantity = choosenproduct.quantity + 1;
        choosenproduct.quantityprice = choosenproduct.quantityprice + choosenproduct.price;
        const product_in_cart = this.state.product_in_cart;
        product_in_cart[index] = choosenproduct;
        this.setState({product_in_cart: product_in_cart});
        localStorage.setItem("product_in_cart", JSON.stringify(this.state.product_in_cart));
        let totalprice = this.state.totalprice;
        totalprice = totalprice + choosenproduct.price;
        this.setState({totalprice: totalprice});
    }

    onDecrement = id => {
        const index = this.state.product_in_cart.findIndex(p => {
            return p.id === id;
        });
        const choosenproduct = this.state.product_in_cart[index];
        if (choosenproduct.quantity > 1) {
            choosenproduct.quantity = choosenproduct.quantity - 1;
            choosenproduct.quantityprice = choosenproduct.quantityprice - choosenproduct.price;
            const product_in_cart = this.state.product_in_cart;
            product_in_cart[index] = choosenproduct;
            this.setState({product_in_cart: product_in_cart});
            localStorage.setItem("product_in_cart", JSON.stringify(this.state.product_in_cart));
            let totalprice = this.state.totalprice;
            totalprice = totalprice - choosenproduct.price;
            this.setState({totalprice: totalprice});
        }
    }


    render() {
        const shoppingcart=<div className="shopping-cart">
        <div className="title">
            Shopping Bag
        </div>
        {this.state.product_in_cart.map((item, i) => {

            return (
                <div key={i}>
                    <Cart description={item.productName}
                          price={item.quantityprice}
                          image={item.photos[0]}
                          onDeleteHandler={(event) => this.onDeleteHandler(item.id)}
                          quantity={item.quantity}
                          onIncrement={(event) => this.onIncrement(item.id)}
                          onDecrement={(event) => this.onDecrement(item.id)}
                    ></Cart>
                </div>
            );
        })}
        <div className="totalprice">
            <div className="totalpricetext">Total Price:</div>
            <div className="totalpricevalue">Rs {this.state.totalprice}</div>
        </div>
    </div>

     const showmessage=<div className="cartempty"><h3>Cart is Empty</h3></div> 

        return (
            <>
                 <Link to="/">
            <button type="button" className="Continuecart btn btn-light"><i className="fa fa-angle-double-left"></i> Continue Shopping</button>
            </Link>
             {this.state.showCart?shoppingcart:showmessage}
           </>
        )
    }
}

export default CartProduct;