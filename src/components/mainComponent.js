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
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

class Main extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/products" render={() => <Products />} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/aboutus" component={About} />
                    <Route path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;