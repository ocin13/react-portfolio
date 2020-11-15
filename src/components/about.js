import React, {Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Card, CardBody, CardImg, CardLink, CardSubtitle, CardText, CardTitle, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom'

function Team ({member}){
    return(
            <Card className="teamCard">
                <CardImg src={member.image} alt={member.name} width="200px" height="200px" />
                <CardBody>
                    <CardTitle> <h4>{member.name}</h4> </CardTitle>
                    <CardSubtitle> {member.job} </CardSubtitle>
                    <CardText> {member.description} </CardText>
                </CardBody>
            </Card>
    );
   
}

function About(props){
    const teamMembers = props.members.map(member =>
            {
                return(
                    <div className="col-12 col-md-3">
                        <Team member={member} />
                    </div>
                );
            }
        );
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
                <div className="col-6 mx-auto ">
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
        <div className="row row-content text-center">
            <div className="col-12 mb-5">
                <h3>Team Members</h3>
            </div>
            {teamMembers}
        </div>
        </div>
    );
}

export default About;