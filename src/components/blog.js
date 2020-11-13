import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,CardLink,Breadcrumb,BreadcrumbItem,ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderArticleCard({article}){
    return(
        <Card className="article px-5">
            <Link to={`/blog/${article.id}`}>
                <CardBody>
                    <CardTitle className="articleTitle">{article.title}</CardTitle>
                    <CardSubtitle> {article.subtitle.slice(0,20)} </CardSubtitle>
                </CardBody>
                <CardImg width="100%" height="200px" src={article.image} />
                <CardBody>
                    <CardText> {article.subtitle} </CardText>
                    <CardLink>Read More...</CardLink>
                </CardBody>
        </Link>
    </Card>
    );
}


function Blog(props){
    const articlesList = props.articles.map(article =>{
        return (
            <ListGroupItem tag="a" key={article.id}> <Link to={`/blog/${article.id}`}>{+article.id + 1}-{article.title}</Link></ListGroupItem>
        );
    });
    const articles = props.articles.map(article => {
        return(
            <div className="col mb-3">
                <RenderArticleCard article={article} />
            </div>
        );
    });
    return(
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem ><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Artiles</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-5 articleList">
                   <ListGroup>{articlesList}  </ListGroup>
                </div>
                <div className="col col-7">
                    {articles}
                </div>
            </div>
        </div>
    );
}

export default Blog;