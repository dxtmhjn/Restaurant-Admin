import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateUser from '../../Components/Admin/CreateUserForm';
import {getChainresturant} from "../../Components/Admin/Helper";
import Cookies from'js-cookie';
import {fetchRestaurants} from '../../Components/Login/actions';
class UserContainer extends Component {
 
state={
  restaurantChainList :[],
  resID:""
}
componentDidMount(){
  let token=localStorage.getItem("usertoken");
  if(token){
    this.props.getRestaurant(token);
  }
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
    this.setState({resID :resID})
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
      {/* <Header  ></Header>
      <MainBody > */}
		
                <CreateUser 
                resID ={this.state.resID}
                handleRestaurantChangeSelection ={this.handleRestaurantChangeSelection}
                restaurantList ={this.props.restaurantList}
                restaurantChainList= {this.state.restaurantChainList}
                />
               
        
        {/* </MainBody> */}
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
      getRestaurant: obj => {
        dispatch(fetchRestaurants(obj));
      }
    
}
  }
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserContainer));