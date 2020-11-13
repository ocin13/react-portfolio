import React, {Component} from 'react';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'

function About(){
    return(
        <div className="container">
            <div className="row text-center py-5">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem ><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row text-center">
                <div className="col-6 mx-auto">
                    <h1>about us</h1><hr className="mb-5"></hr>
                    <h3>who we are</h3>
                    <p>we are one of the best leading comapny in the liuzury fashion market we have been serving
                        our clients for more than 120years and we still do that in more than 120 countries around the world 
                        we offer great customer services experience customer is the king for us no matter what you will find it with us
                        and it gonna please you.
                    </p>
                    <img width="100%" height="300px" alt="about us image" src="/assets/images/article02.jpg" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;