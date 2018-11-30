import React, { Component, Fragment } from 'react';
import $ from 'jquery';
//import { Redirect } from 'react-router'
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/style.scss';
import Header from './base/header/Header';
import Footer from './base/footer/Footer';
import MainBody from './base/mainBody/MainBody';
import KitchenVeg from './Components/kitchen/kitchenVeg/KitchenVeg';
import KitchenNonVeg from './Components/kitchen/kitchenNonVeg/KitchenNonVeg';
import  AddMenuItem from './Components/menu/addMenuItem/AddMenuItem';
import login from './Components/Login/Login';
import  EditMenu from './Components/menu/EditMenu/EditMenu';
import  ViewMenu from './Components/menu/viewMenu/ViewMenu';
import CreateUserForm from "./Components/Admin/CreateUserForm";
import UserList from "./Components/Admin/UserList";
import CreateRestaurantForm from "./Components/Admin/CreateRestaurantForm";
import CreateRestaurantChain from "./Components/Admin/CreateRestaurantChain";


// Router
import {BrowserRouter as Router, Route, Link, NavLink,Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Fragment>
           <Router>
            <div>
            <Header  ></Header>
            <MainBody  ></MainBody>
            <Route path="/createuser" component={CreateUserForm} exact />
            <Route path="/createuser" component={CreateUserForm} exact />
            <Route path="/userlist" component={UserList} exact />
            <Route path="/createrestaurant" component={CreateRestaurantForm} />
            <Route path="/createrestaurantchain" component={CreateRestaurantChain} />
            <Route path="/AddMenu" component={AddMenuItem} />
            <Route path="/EditMenu" component={EditMenu} />
            <Route path="/login" component={login} />
           
            
            <Route path="/ViewMenu" component={ViewMenu} />
            <Footer></Footer>
            </div>
        </Router>
        
        </Fragment>
    );
  }
}

export default App;
