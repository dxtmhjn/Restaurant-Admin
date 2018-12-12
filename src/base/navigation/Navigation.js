import React, { Component,Fragment } from "react";

// Router
import { NavLink, Redirect, Link } from "react-router-dom";
import Cookies from 'js-cookie';
import {RolesManager} from '../../constants/constant';
class Navigation extends Component {
    state={
        isloggedIn:true,
        username :"Guest",
        role :"",
        menuitem :[]
    }
   
    componentDidMount(){
        var usertoken = localStorage.getItem("usertoken");
        this.setState({role: Cookies.get('userrole')});
        if(usertoken){
            this.setState({ isloggedIn:true});
        }
    }
  

    getMenuItemByRole(role){
      this.setState({menuitem : RolesManager['role']});
    }
    componentDidUpdate(prevProps, prevState){
        // if ( prevProps.usertoken && 
        //     this.props.usertoken &&
           
           
        //    (  prevProps.usertoken.data === undefined && this.props.usertoken.data.name)) {
        //     this.setState({ isloggedIn:true ,username :this.props.usertoken.data.name});
        //   }
    }
    
    logoutHandler =()=>{
       this.setState({ isloggedIn:false},()=>{
        localStorage.removeItem("usertoken");
       });
     
      
    }
  render() {
    const islogged = this.props.isLogged;
        const user =this.state.username;
        let displayHeader;
        let customNavbar;
        let extraMenu ;
        if (!this.state.isloggedIn) {
            return <Redirect to="/login" push={true} />
          }
    
      extraMenu = (

<Fragment></Fragment>

      );
    

    
      customNavbar = (
        <ul className="metismenu" id="side-menu">

          <li>
                <a href="index.html">
                    <i className="fi-air-play"></i>
                    <span className="badge badge-danger badge-pill pull-right">7</span> 
                    <span> Dashboard </span>
                </a>
            </li>

          
          <li>
                <a href="javascript: void(0);"><i className="fi-layers"></i> 
                <span> User Management </span> <span className="menu-arrow"></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                <li>
              <NavLink to="/createuser">Create User</NavLink>
              </li>
              <li>
              <NavLink to="/userlist">User List</NavLink>
              </li>
                </ul>
            </li>

            <li>
                <a href="javascript: void(0);"><i className="fi-layers"></i> 
                <span> Restaurant Management </span> <span className="menu-arrow"></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                <li>
              <NavLink to="createrestaurant">Create Restaurant</NavLink>
              </li>
              <li>
              <NavLink to="restaurantlist">Restaurant List</NavLink>
              </li>
              <li><NavLink to="createrestaurantchain">
                Create Chain For Restaurant
              </NavLink>
              </li>
              <li><NavLink to="restaurantchainlist">
                Restaurant Chain List
              </NavLink>
              </li>
                </ul>
            </li>


          <li>
                <a href="javascript: void(0);"><i className="fi-layers"></i> 
                <span> Menu Management </span> <span className="menu-arrow"></span></a>
                <ul className="nav-second-level" aria-expanded="false">
                <li>

              <NavLink to="AddMenu">Add Menu</NavLink>
              </li>
              <li>
              <NavLink to="EditMenu">Edit Menu</NavLink>
              </li>
              <li>
              <NavLink to="ViewMenu">View Menu</NavLink>
              </li>
                </ul>
            </li>


        </ul>
      );


    return (


<div className="left side-menu">

<div className="slimscroll-menu" id="remove-scroll">

    
    <div className="topbar-left">
        <a href="index.html" className="logo">
            <span>
                <img src="assets/images/logo.png" alt="" height="22"/>
            </span>
            <i>
                <img src="assets/images/logo_sm.png" alt="" height="28"/>
            </i>
        </a>
    </div>

  
            <div id="sidebar-menu">

              {customNavbar}

            </div>
   

    <div className="clearfix"></div>

</div>
</div>







     
    );
  }
}

export default Navigation;
