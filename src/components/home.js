import React,{Component} from 'react'
import {Card,CardImg,CardTitle,CardBody,CardLink,CardText,Media} from 'reactstrap'
import SiteBanner from './baner';
import {Link} from 'react-router-dom';
import NewsLetter from './newsletter'
function RenderFeaturedArticle({article}){
    return(
        <Media className="px-5 py-5">
            <Media >
                <Media src={article.image} alt={article.title} width="500px" height="300px" />
            </Media>
            <Media body className="px-5">
                <Media heading>
                {article.title}
                </Media>
                {article.subtitle}
                <hr></hr>
                {article.text}
                <Link to={`/blog/${article.id}`}> Read more... </Link>
            </Media>
        </Media>
    );
}

function RenderFeaturedProduct({product}){
    return(
        
        <Card className="card">
            <Link>
                <CardImg top width="100%" height="300px" src={product.image} alt={product.name}/>
                <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CardLink>Buy Now</CardLink>
                </CardBody>
            </Link>
        </Card>
   
);
}

function Promotion(){
    return(
        <div className="row py-5 px-3">
            <div className="col col-md-4">
                <div className="frame">
                    <span><i className="fa fa-truck"></i></span>
                    <h5>Free Shipping</h5>
                    <p>up to 50$ free shipping</p>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="frame">
                    <span><i className="fa fa-comments"></i></span>
                    <h5>24/7 Support</h5>
                    <p>Our staffs are always available for you</p>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="frame">
                    <span><i className="fa fa-money"></i></span>
                    <h5>Refund Policy</h5>
                    <p>30 Days not satisfied get your money back</p>
                </div>
            </div>
        </div>
    );
}

function Home(props){
    const hotProduct = props.hotProducts.map(product => {
        return(
            <div className="col-3 mb-3">
                <RenderFeaturedProduct product={product} />
            </div>
        );
    })
    return(
        <React.Fragment>
            <SiteBanner />
            <Promotion />
            <div className="row px-5 text-center">
                <div className="col mb-5"><h1>Featured Products:</h1></div>
                <div className="row px-5"> {hotProduct} </div>
            </div>
            <RenderFeaturedArticle article={props.featuredArticle} />
            <div className="row py-5 px-5 text-center newsletters">
                <div className="col-12 mb-5"><h1>Subscripe To The Newletters</h1></div>
                <div className="col-4 mx-auto">
                        <NewsLetter/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;