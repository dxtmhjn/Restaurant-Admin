import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateUser from '../../Components/Admin/CreateUserForm';
import Header from '../../base/header/Header';
import MainBody from '../../base/mainBody/MainBody';
class UserContainer extends Component {

    render() {
		return (
      <div>
      <Header  ></Header>
      <MainBody >
		
                <CreateUser restaurantList ={this.props.restaurantList}/>
               
        
        </MainBody>
        </div>)
        }
}
function mapStateToProps(state, ownProps) {
    return {
      usertoken: state.AuthenticationReducer.usertoken,
      restaurantList :state.AuthenticationReducer.restaurant
    }
  }
  const mapDispatchToProps =(dispatch)=> {
    return {
      checkCredentails:( obj ) => {
       
    
    }
}
  }
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserContainer));