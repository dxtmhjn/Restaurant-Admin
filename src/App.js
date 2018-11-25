import React, { Component, Fragment } from 'react';
import $ from 'jquery';

import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/style.scss';
import Header from './base/header/Header';
import Footer from './base/footer/Footer';
import MainBody from './base/mainBody/MainBody';
import KitchenVeg from './Components/kitchen/kitchenVeg/KitchenVeg';
import KitchenNonVeg from './Components/kitchen/kitchenNonVeg/KitchenNonVeg';
import CreateUserForm from "./Components/Admin/CreateUserForm";
import CreateRestaurantForm from "./Components/Admin/CreateRestaurantForm";
import CreateRestaurantChain from "./Components/Admin/CreateRestaurantChain";



// Router
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';


class App extends Component {

  state={
    isLogged:false,
};


  render() {
    return (
      <Fragment>
           <Router>
            <div>
            <Header isLogged={this.state.isLogged}></Header>
            <MainBody isLogged={this.state.isLogged}></MainBody>
            <Route path="/createuser" component={CreateUserForm} exact />
            <Route path="/createrestaurant" component={CreateRestaurantForm} />
            <Route path="/createrestaurantchain" component={CreateRestaurantChain} />

            <Footer></Footer>
            </div>
        </Router>
        
        </Fragment>
    );
  }
}

export default App;
