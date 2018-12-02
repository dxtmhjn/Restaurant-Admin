import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateUser from '../../Components/Admin/CreateUserForm';
import {getChainresturant} from "../../Components/Admin/Helper";
import Header from '../../base/header/Header';
import MainBody from '../../base/mainBody/MainBody';
class UserContainer extends Component {

state={
  restaurantChainList :[]
}
addChainItemtoArray(res){
let result =[];
if(res && res.data && res.data.length >0){
  res.data.forEach(element => {
    result.push(element.value)
  });
 
}
return result;
}
  handleRestaurantChangeSelection =(e)=>{
    let resID= e.target.value;
    
     getChainresturant(resID).then(res=>{
       if(res)
        {
          this.setState({restaurantChainList :this.addChainItemtoArray(res)})
        }
    })
  }
    render() {
		return (
      <div>
      <Header  ></Header>
      <MainBody >
		
                <CreateUser 
                handleRestaurantChangeSelection ={this.handleRestaurantChangeSelection}
                restaurantList ={this.props.restaurantList}
                restaurantChainList= {this.state.restaurantChainList}
                />
               
        
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