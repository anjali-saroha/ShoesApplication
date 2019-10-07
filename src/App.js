import React from 'react';
import Home from "./Components/Home/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from "./Components/About/About";
import Navbar from "./Components/NavBar/Navbar";
import ShowDetail from "./Components/ShowDetail/ShowDetail";
import CartProduct from "./Components/CartPoduct/CartProduct";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                 <Route path="/about" exact component={About}/>
                <Route path="/mycart" exact component={CartProduct}/>
                <Route path="/:id" exact component={ShowDetail}></Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
