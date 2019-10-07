import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Col, Button} from 'react-bootstrap';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleLogin() {
        if (localStorage) {
            localStorage.setItem('isLogin', 'true');
        }
    }

    render() {
        return (
            <form>
                <FormGroup controlId="email"
                           validationState={this.getValidationState()}>
                    <InputGroup className="mb-4">
                        <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user-o"></i>
                                </span>
                        </div>
                        <FormControl type="text"
                                     placeholder="Enter Username"
                                     autoComplete="off"
                        />
                    </InputGroup>
                </FormGroup>

                <FormGroup controlId="password"
                           validationState={this.getValidationState()}>
                    <InputGroup className="mb-4">
                        <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"></i>
                                </span>
                        </div>
                        <FormControl type="password"
                                     placeholder="Enter Password"
                                     autoComplete="off"
                        />
                    </InputGroup>
                </FormGroup>

                <div className="row">
                    <Col md={6}>
                        <Button bsStyle="dark" className="px-4" onClick={this.handleLogin}> Sign In </Button>
                    </Col>
                    <Col md={6}
                         className="text-right">
                        <a className="px-0 btn-link">
                            Forgot Password?
                        </a>
                    </Col>
                </div>
            </form>
        );
    }
}

export default Form;
