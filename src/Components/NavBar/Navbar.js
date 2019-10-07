import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import SimpleModal from "../Modal/SimpleModal";

const navbar = () => {
    return (
        <div style={{display:'flex', maxHeight:60,width:'100%',backgroundColor:'#0c1e69'}} className="sticky-top">
           <Link to="/" style={{ textDecoration: 'none' }}> <div className="logo">
                <h1>Shoe-Adda</h1>
            </div></Link>
            <div style={{display:'flex',marginLeft:'auto',width:'60%', justifyContent:'space-around'}}>
                <Link to = "/" style={{ textDecoration: 'none' }}>
                    <div style={{fontWeight: 'bold', fontSize: 20, margin: 15, color: 'white'}}>
                       Home
                    </div>
                </Link>

                <Link to = "/about" style={{ textDecoration: 'none' }}>
                    <div style={{fontWeight: 'bold', fontSize: 20, margin: 15, color: 'white'}}>
                      About Us
                    </div>
                </Link>
               

                  <div>
                      <SimpleModal></SimpleModal>
                  </div>
                {/* <Link to = "/login">
                    <div>
                        <i className="fa fa-user-circle fa-2x"  aria-hidden="true" style={{color:'white', margin: 10}}></i>
                    </div>
                </Link> */}

                <Link to = "/mycart" style={{ textDecoration: 'none' }}>
                    <div>
                        <i className="fa fa-shopping-cart fa-2x" style={{color:'white', margin: 10}}></i>
                    </div>
                </Link>

            </div>

        </div>

    )
};

export default navbar