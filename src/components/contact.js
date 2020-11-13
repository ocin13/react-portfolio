import React, {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'

function Contact(){
    return(
        <React.Fragment>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                        <BreadcrumbItem ><Link to="/home/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-6 px-5">
                        <h3 className="mb-3">Delite</h3>
                        <h6><i className="fa fa-globe"></i> Address:</h6>
                        <p>28 Jackson Blvd Ste
                            1020 Chicago
                            IL 60604-2340.</p>
                        <p><h6><i className="fa fa-phone"></i> Phone: </h6>+1 968 222 1456</p>
                        <p><h6><i className="fa fa-envelope"></i> E-mail: </h6>mail@placerestaurent.com</p>
                    </div>
                    <div className="col-6 px-5">
                        <Form>
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="firstname">FirstName</Label>
                                    <Input type="email" name="first" id="firstname" placeholder="FirstName" />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="lastname">LastName</Label>
                                    <Input type="password" name="password" id="lastname" placeholder="LastName" />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email" />
                            </Row>
                            <FormGroup>
                                <Label for="comment">Comment</Label>
                                <Input placeholder="Comment..." type="textarea" name="comment" id="comment" />
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="accept"/>
                                <Label for="accept" check>accept</Label>
                            </FormGroup>
                            <Button>Send</Button>
                            </Form>
                        </div>
                    </div>
        </React.Fragment>
    );
}

export default Contact;