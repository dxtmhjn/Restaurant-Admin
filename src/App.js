import React, { Component, Fragment } from 'react';
import $ from 'jquery';
//import { Redirect } from 'react-router'
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/scss/bootstrap.scss';
import Header from './base/header/Header';
import Footer from './base/footer/Footer';
import MainBody from './base/mainBody/MainBody';
import KitchenVeg from './Components/kitchen/kitchenVeg/KitchenVeg';
import KitchenNonVeg from './Components/kitchen/kitchenNonVeg/KitchenNonVeg';
import  AddMenuItem from './Components/menu/addMenuItem/AddMenuItem';
import Login from './Components/Login/Login';
import  EditMenu from './Components/menu/EditMenu/EditMenu';
import  ViewMenu from './Components/menu/viewMenu/ViewMenu';
import CreateUserForm from "./Components/Admin/CreateUserForm";
import UserList from "./Components/Admin/UserList";
import CreateRestaurantForm from "./Components/Admin/CreateRestaurantForm";
import CreateRestaurantChain from "./Components/Admin/CreateRestaurantChain";
import  UserContainer  from './Container/Admin/UserContainer';
import ChainRestaurantConainer from './Container/Admin/ChainRestaurantConainer';
import UserListContainer from './Container/Admin/UserListContainer';
import AddMenuContainer from './Container/Menu/AddMenuContainer';
import RestaurantList from "./Components/Admin/RestaurantList";
import RestaurantChainListContainer from "./Container/Admin/RestaurantChainListContainter";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
// toaster
import { ToastContainer, toast } from 'react-toastify';

// Router

import {BrowserRouter as Router, Route,Switch, Link, NavLink,Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loader from 'react-loader-advanced';


class App extends Component {
state={
  role:""
}
  componentDidMount(){
    //
  }
  render() {
    return (
      <Fragment>
      
           <Router>
           <Fragment>
          
           <Switch>
           <Loader  show={this.props.isloading} message={'loading'}>
           <Route exact path="/" render={() => (
    <Redirect to="/login"/>
)}/>
            <Route path="/login" component={Login} /> 
  
            {/* <Header  ></Header>
            <MainBody  ></MainBody> */}
    
          <Layout>
            <Route  path="/createuser" component={UserContainer} exact />
            <Route path="/userlist" component={UserListContainer} exact />

            <Route path="/createrestaurant" component={CreateRestaurantForm} />
            <Route path="/restaurantlist" component={RestaurantList} />

            <Route path="/createrestaurantchain/:id" component={ChainRestaurantConainer} />
            <Route path="/createrestaurantchain" component={ChainRestaurantConainer} />
            <Route path="/restaurantchainlist" component={RestaurantChainListContainer} />

            <Route path="/AddMenu" component={AddMenuContainer} />
            <Route path="/EditMenu" component={EditMenu} />
            <Route path="/kitchen-veg" component={KitchenVeg} />
           
           
           
            <Route path="/ViewMenu" component={ViewMenu} />
            </Layout>
            </Loader>
            </Switch>
            {/* <Footer></Footer> */}
            <ToastContainer />
            </Fragment>
         
        </Router>
       
        </Fragment>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    isloading :state.AuthenticationReducer.isloading,
    usertoken: state.AuthenticationReducer.usertoken,
    restaurantList :state.AuthenticationReducer.restaurant
  }
}



export default withRouter(connect(mapStateToProps, null)(App));
//export default App;
const Layout = ({ children }) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
);