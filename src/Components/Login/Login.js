import React from 'react';
import {Col} from 'react-bootstrap';
import LoginForm from './Form';
import '../NavBar/Navbar.css';
class Login extends React.Component {
    render() {
        return (
            <div className="align-items-center app">
                <div className="container">
                    <div className="justify-content-center row">
                        <Col
                            md={12}>
                            <div className="card-group">
                                <div className="card p-2">
                                    <div className="card-body">
                                        <h1>Account Login</h1>
                                        <p className="text-muted">Sign In to your account </p>
                                        <LoginForm/>
                                    </div>
                                </div>

                                <div className="card text-white bg-dark py-5 d-md-down-none">
                                    <div className="card-body m text-center">
                                        <div className="logo" style={{margin:50}}>
                                            <h1>Shoe-Adda</h1>
                                        </div>
                                        <p className="mt-5">&copy; 2012-2019 Shoe-Adda, Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        
        );
        // return (
        //     <div className="align-items-center app">
        //         <div className="container">
        //             <div className="justify-content-center row">
        //                 <Col
        //                     md={12}>
        //                     <div className="card-group">
        //                         <div className="card p-2">
        //                             <div className="card-body">
        //                                 <h1>Account Login</h1>
        //                                 <p className="text-muted">Sign In to your account </p>
        //                                 <LoginForm/>
        //                             </div>
        //                         </div>

        //                         <div className="card text-white bg-dark py-5 d-md-down-none">
        //                             <div className="card-body m text-center">
        //                                 <div className="logo" style={{margin:50}}>
        //                                     <h1>Shoe-Adda</h1>
        //                                 </div>
        //                                 <p className="mt-5">&copy; 2012-2019 Shoe-Adda, Inc.</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Col>
        //             </div>
        //         </div>
        //     </div>
        
        // );
    }
}


export default Login;
