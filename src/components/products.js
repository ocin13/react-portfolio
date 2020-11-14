import React, {Component} from 'react'
import {Card,CardImg,CardTitle,CardLink,CardText,Breadcrumb,BreadcrumbItem, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom'

export function RenderProductCard({product}){
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

function Products(props){
    const products = props.products.map(product => {
        return(
            <div key={product.id} className="col-12 col-sm-6 col-md-3 mb-2">
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
                    <h1>products</h1>
                    <div className="row">
                        {products}
                    </div>
                </div>
            </div>
    );
}

export default Products;