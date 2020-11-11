import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

function Footer(){
    return(
        <footer className="footer-site">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h3>Links:</h3>
                        <ul className="unstyled-list">
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/aboutus">About Us</NavLink></li>
                            <li><NavLink to="/contactus">contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3">
                        <h3>Social:</h3>
                        <ul>
                            <li><a className="btn btn-social btn-instagram" href="https://www.instagram.com"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="btn btn-social btn facebook" href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="btn btn-social btn-google" href="https://www.google.com"><i className="fa fa-google"></i></a></li>
                            <li><a className="btn btn-social btn-twitter" href="https://www.twitter"><i className="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-5 text-center">
                        <h3>Contact:</h3>
                        <ul>
                            <li><a role="button" className="btn-link" href="tel:+120000000"><i className="fa fa-phone"></i>Phone: +12000000</a></li>
                            <li><a role="button" className="btn-link" href="mailto:info@delite.com"><i className="fa fa-envelope"></i>Email: info@delite.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;