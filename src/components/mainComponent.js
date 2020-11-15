import React, { Component } from 'react';
import { ARTICLES } from '../shared/Articles';
import { COLLECTIONS } from '../shared/Collections';
import { COMMENTS } from '../shared/Comments';
import { PRODUCTS } from '../shared/Products';
import { MEMBERS } from '../shared/Team';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Blog from './blog';
import Contact from './contact';
import About from './about';
import Products from './products';
import BlogInfo from './blogInfo';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : PRODUCTS,
            comments : COMMENTS,
            Collections : COLLECTIONS,
            articles : ARTICLES,
            members : MEMBERS
        };
    }

    render(){
        const ArticleInfo = ({match}) => {
            return(
                <BlogInfo article={this.state.articles.filter(article => article.id === +match.params.articleId)[0]}/>
            );
        };

        const HomePage = () => {
            return(
                <Home hotProducts={this.state.products.filter(product => product.featured == true)} 
                featuredArticle={this.state.articles.filter(article => article.featured == true)[0]}
                />
            );
        };

        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/products" render={() => <Products products={this.state.products} />} />
                    <Route exact path="/blog" render={() => <Blog articles={this.state.articles} />} />
                    <Route path="/blog/:articleId" component={ArticleInfo} />
                    <Route path="/aboutus" render={() => <About members={this.state.members} />} />
                    <Route path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;