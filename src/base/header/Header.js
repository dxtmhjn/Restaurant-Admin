import React, { Component } from "react";

// Router
import { NavLink, Redirect, Link } from "react-router-dom";

class Header extends Component {
  state = {
    isloggedIn: true
  };

  componentDidMount() {
    var usertoken = localStorage.getItem("usertoken");
    if (usertoken) {
      this.setState({ isloggedIn: true });
    }
  }

  logoutHandler = () => {
    this.setState({ isloggedIn: false }, () => {
      localStorage.removeItem("usertoken");
    });
  };
  render() {
    const islogged = this.props.isLogged;
    let displayHeader;
    let customNavbar;
    let extraMenu;
    if (!this.state.isloggedIn) {
      return <Redirect to="/login" push={true} />;
    }
    if (this.state.isloggedIn) {
      extraMenu = (
        <div className="header-top">
          <div className="container">
            <div className="header-top-inner">
              <div className="header-top-left">
                <a href="#" className="top-cell">
                  <img src="images/fon.png" alt="" /> <span>123-456-7890</span>
                </a>
                <a href="#" className="top-email">
                  <span>support@laboom.com</span>
                </a>
              </div>
              <div className="header-top-right">
                <div className="social-top">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="language-menu">
                  <a href="#" className="current-lang">
                    English{" "}
                    <i className="fa fa-caret-down" aria-hidden="true" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Turkish
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Nederlands
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Français
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Deutsch
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Italiano
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.isloggedIn) {
      customNavbar = (
        <ul>
          <li className="">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="has-child">
            <a href="#">
              <i className="icon-layers" />Menu Management
            </a>
            <ul className="drop-nav">
              <li>
                <Link to="/viewmenu">View Menu</Link>
              </li>
              <li>
                <Link to="/addmenuitem">Add Menu Item</Link>
              </li>
            </ul>
            <span className="drop-nav-arrow">
              <i className="fa fa-angle-down" />
            </span>
          </li>
          <li className="has-child">
            <a href="#">User Management</a>
            <ul className="drop-nav">
            <li>
              <NavLink to="/createuser">Create User</NavLink>
              </li>
              <li>
              <NavLink to="/userlist">User List</NavLink>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <a href="#">Restaurant Management</a>
            <ul className="drop-nav">
            <li>
              <NavLink to="createrestaurant">Create Restaurant</NavLink>
              </li>
              <li><NavLink to="createrestaurantchain">
                Create Chain For Restaurant
              </NavLink>
              </li>
            </ul>
          </li>
          <li className="has-child">
            <a href="#">Menu</a>
            <ul className="drop-nav">
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
    }

    return (
      <header>
        <div className="header-part header-reduce sticky">
          {extraMenu}

          <div className="header-bottom">
            <div className="container">
              <div className="book-table header-collect book-sm">
                <a href="#" data-toggle="modal" data-target="#booktable">
                  <img src="images/icon-table.png" alt="" />
                  Book a Table
                </a>
              </div>
              <div className="menu-main">{customNavbar}</div>
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
