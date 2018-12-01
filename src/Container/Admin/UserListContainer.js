import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserList from '../../Components/Admin/UserList';
import Header from '../../base/header/Header';
import MainBody from '../../base/mainBody/MainBody';
class UserListContainer extends Component {

    render() {
		return (
      <div>
      <Header  ></Header>
      <MainBody >
		
                <UserList users ={this.props.users}/>
               
        
        </MainBody>
        </div>)
        }
}
function mapStateToProps(state, ownProps) {
    return {
      users: state.AuthenticationReducer.users,
      
    }
  }

  

export default withRouter(connect(mapStateToProps, null)(UserListContainer));