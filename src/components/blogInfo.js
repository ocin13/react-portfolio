import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card,CardTitle,CardBody,CardText,CardImg,CardSubtitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';

function Article({article}){
    return(
        <div className="col-12 pb-5">
            <h2> {article.title} </h2>
            <hr></hr>
            <Card>
                <CardImg src={article.image} alt={article.title} width="500px" height="400px" />
                <CardBody>
                    <CardTitle> {article.title} </CardTitle>
                    <CardSubtitle className="mb-4"> {article.subtitle} </CardSubtitle>
                    <CardText> {article.text} </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function BlogInfo(props){
    if(props.article){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem ><Link to="/home/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem ><Link to="/blog/">Blog</Link></BreadcrumbItem>
                            <BreadcrumbItem active> {props.article.title}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row pb-5">
                    <Article article={props.article} />
                </div>
            </div>
        );
    }
    else{
        return <div></div>
    }
}

export default BlogInfo;