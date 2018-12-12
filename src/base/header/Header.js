import React, { Component,Fragment } from "react";

class Header extends Component {
  
  render() {
   
    return (
<div className="topbar">

<nav className="navbar-custom">

    <ul className="list-unstyled topbar-right-menu float-right mb-0">

        <li className="hide-phone app-search">
            <form>
                <input type="text" placeholder="Search..." className="form-control"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </li>
        <li className="dropdown notification-list">
            <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button"
               aria-haspopup="false" aria-expanded="false">
                <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle"/> <span className="ml-1">Maxine K <i className="mdi mdi-chevron-down"></i> </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown ">
               
                <div className="dropdown-item noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fi-head"></i> <span>My Account</span>
                </a>

                
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fi-cog"></i> <span>Settings</span>
                </a>

               
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fi-help"></i> <span>Support</span>
                </a>


                
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <i className="fi-power"></i> <span>Logout</span>
                </a>

            </div>
        </li>

    </ul>

    <ul className="list-inline menu-left mb-0">
        <li className="float-left">
            <button className="button-menu-mobile open-left disable-btn">
                <i className="dripicons-menu"></i>
            </button>
        </li>
        <li>
            <div className="page-title-box">
                <h4 className="page-title">Starter </h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Highdmin</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active">Starter</li>
                </ol>
            </div>
        </li>

    </ul>

</nav>

</div>
     
    );
  }
}

export default Header;
