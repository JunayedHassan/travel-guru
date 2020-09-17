import React from 'react';
import './Login.css'
import logo from '../Header/Logo.png';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="loginBody">
            <div>
                <div className="d-flex justify-content-center">
                    <img className="Navlogo" src={logo} alt="logo" />
                    <div className="navSignUp col-7">
                        <div className="navBox">
                            <nav>
                                <Link className="Loginnavlink" to="./home">Home</Link>
                                <Link className="Loginnavlink" to="./destination">Destination</Link>
                                <Link className="Loginnavlink" to="./blog">Blog</Link>
                                <Link className="Loginnavlink" to="./contact">Contact</Link>
                            </nav>
                            <Link to="./login"><button>Log In</button></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={console.log('hi')}>Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;