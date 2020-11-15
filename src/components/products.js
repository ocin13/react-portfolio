import React, {Component} from 'react'
import {Card,CardImg,CardTitle,CardLink,CardText,Breadcrumb,BreadcrumbItem, CardBody, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom'

export function RenderProductCard({product}){
    return(
        
            <Card className="cardProduct text-center">
                <Link>
                    <CardImg top width="100%" height="300px" src={product.image} alt={product.name}/>
                    <CardBody>
                        <CardTitle className="productName">{product.name}</CardTitle>
                        <CardSubtitle className="mb-2"> {product.price} $</CardSubtitle>
                        <CardText className="d-none d-md-block">{product.description}</CardText>
                        <CardLink className="buyButton text-light">Buy Now</CardLink>
                    </CardBody>
                </Link>
            </Card>
       
    );
}

function Products(props){
    const products = props.products.map(product => {
        return(
            <div key={product.id} className="col-12 col-sm-6 col-md-3 mb-2 px-5">
                <RenderProductCard product={product} />
            </div>
        );
    }
        
        );
    return(
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Products</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="row row-content">
                        <div className="col text-center mb-5"><h1>Our Products</h1></div>
                        <div className="row px-5">
                            {products}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Products;