import React,{Component} from 'react';

// Router
import {NavLink,Redirect } from 'react-router-dom';

class Header extends Component{
    state={
        isloggedIn:true
    }
   
    componentDidMount(){
        var usertoken = localStorage.getItem("usertoken");
        if(usertoken){
            this.setState({ isloggedIn:true});
        }
    }

    
    logoutHandler =()=>{
       this.setState({ isloggedIn:false},()=>{
        localStorage.removeItem("usertoken");
       });
     
      
    }
    render(){
        const islogged = this.props.isLogged;
        let displayHeader;
        let customNavbar;
        let extraMenu ;
        if (!this.state.isloggedIn) {
            return <Redirect to="/login" push={true} />
          }
       // if(this.state.isloggedIn){
            extraMenu = (
                <div className="menu-extras topbar-custom">
    
                <ul className="list-unstyled topbar-right-menu float-right mb-0">
    
                    <li className="menu-item">
                        <a className="navbar-toggle nav-link">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown notification-list hide-phone">
                        <a className="nav-link dropdown-toggle waves-effect nav-user" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <i className="mdi mdi-earth"></i> English  <i className="mdi mdi-chevron-down"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
    
                            
                            <a href="javascript:void(0);" className="dropdown-item">
                                Spanish
                            </a>
    
                            
                            <a href="javascript:void(0);" className="dropdown-item">
                                Italian
                            </a>
    
                            
                            <a href="javascript:void(0);" className="dropdown-item">
                                French
                            </a>
    
                            
                            <a href="javascript:void(0);" className="dropdown-item">
                                Russian
                            </a>
    
                        </div>
                    </li>
    
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <i className="fi-bell noti-icon"></i>
                            <span className="badge badge-danger badge-pill noti-icon-badge">4</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">
    
                            
                            <div className="dropdown-item noti-title">
                                <h6 className="m-0"><span className="float-right"><a href="" className="text-dark"><small>Clear All</small></a> </span>Notification</h6>
                            </div>
    
                            <div className="slimscroll" style={{maxHeight: "230px"}}>
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-success"><i className="mdi mdi-comment-account-outline"></i></div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">1 min ago</small></p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info"><i className="mdi mdi-account-plus"></i></div>
                                    <p className="notify-details">New user registered.<small className="text-muted">5 hours ago</small></p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-danger"><i className="mdi mdi-heart"></i></div>
                                    <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">3 days ago</small></p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-warning"><i className="mdi mdi-comment-account-outline"></i></div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">4 days ago</small></p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-purple"><i className="mdi mdi-account-plus"></i></div>
                                    <p className="notify-details">New user registered.<small className="text-muted">7 days ago</small></p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-custom"><i className="mdi mdi-heart"></i></div>
                                    <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">13 days ago</small></p>
                                </a>
                            </div>
    
                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                View all <i className="fi-arrow-right"></i>
                            </a>
    
                        </div>
                    </li>
    
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <i className="fi-speech-bubble noti-icon"></i>
                            <span className="badge badge-dark badge-pill noti-icon-badge">6</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">
    
                            
                            <div className="dropdown-item noti-title">
                                <h6 className="m-0"><span className="float-right"><a href="" className="text-dark"><small>Clear All</small></a> </span>Chat</h6>
                            </div>
    
                            <div className="slimscroll" style={{maxHeight: "230px"}}>
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Cristina Pride</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="assets/images/users/avatar-3.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Sam Garret</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Karen Robinson</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Wow that's great</p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="assets/images/users/avatar-5.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Sherry Marshall</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                </a>
    
                                
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="assets/images/users/avatar-6.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Shawn Millard</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                </a>
                            </div>
    
                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                View all <i className="fi-arrow-right"></i>
                            </a>
    
                        </div>
                    </li>
    
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle waves-effect nav-user" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle"/> <span className="ml-1 pro-user-name">Maxine K <i className="mdi mdi-chevron-down"></i> </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                            
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
                                <i className="fi-lock"></i> <span>Lock Screen</span>
                            </a>
    
                            <a href="javascript:void(0);" onClick={this.logoutHandler} className="dropdown-item notify-item">
                                <i className="fi-power"></i> <span>Logout</span>
                            </a>
    
                        </div>
                    </li>
                </ul>
            </div>
            );
     //   }

         
     //   if(this.state.isloggedIn){
             customNavbar=(
                <div className="navbar-custom">
                <div className="container-fluid">
                    <div id="navigation">
                        <ul className="navigation-menu">
    
                            <li className="has-submenu">
                                <a href="index.html"><i className="icon-speedometer"></i>Dashboard</a>
                            </li>
    
                            <li className="has-submenu">
                                <a href="#"><i className="icon-layers"></i>Apps</a>
                                
                            </li>

                            <li className="has-submenu">
                        <a className=" dropdown-toggle nav-user" data-toggle="dropdown" href="#" 
                           aria-haspopup="false" aria-expanded="false">
                             User Management  
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
    
                            
                            <NavLink to="/createuser" className="dropdown-item">
                            Create User
                            </NavLink>
                            <NavLink to="/userlist" className="dropdown-item">
                            User List
                            </NavLink>
    
                        </div>
                    </li>
                            <li className="has-submenu">
                        <a className=" dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                             Restaurant Management  
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            
                            <NavLink to="createrestaurant" className="dropdown-item">
                                Create Restaurant
                            </NavLink>
                            <NavLink to="createrestaurantchain"  className="dropdown-item">
                                Create Chain For Restaurant
                            </NavLink>

    
                        </div>
                    </li>
                    <li className="has-submenu">
                        <a className=" dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                             Menu
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            
                            <NavLink to="AddMenu" className="dropdown-item">
                                Add Menu
                            </NavLink>
                            
                            <NavLink to="EditMenu"  className="dropdown-item">
                                Edit Menu
                            </NavLink>
                            <NavLink to="ViewMenu"  className="dropdown-item">
                                View Menu
                            </NavLink>
    
                        </div>
                    </li>
                        </ul>
                    </div>
                </div>
            </div>
             )
 //       }
        
        return (
         
            <header id="topnav">
            <div className="topbar-main">
                <div className="container-fluid">

                    <div className="logo">
                         <a href="index.html" className="logo">
                            <span className="logo-small"><i className="mdi mdi-radar"></i></span>
                            <span className="logo-large"><i className="mdi mdi-radar"></i> Restaurant</span>
                        </a>
                       
                        {/* <a href="index.html" className="logo">
                            <img src="assets/images/logo_sm.png" alt="" height="26" className="logo-small">
                            <img src="assets/images/logo.png" alt="" height="22" className="logo-large">
                        </a> */}

                    </div>
                   


                 {extraMenu}
                   

                    <div className="clearfix"></div>

                </div>
            </div>
           
            {customNavbar}
     
        </header>

                   
        );
    }
}

export default Header;