import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateUserForm from '../../Components/Admin/CreateUserForm';
import {getChainresturant} from "../../Components/Admin/Helper";
import Cookies from'js-cookie';
import {fetchRestaurants} from '../../Components/Login/actions';
class UserContainer extends Component {
 
state={
  restaurantChainList :[],
  resID:"",
  restaurantList:[]
}
componentDidMount(){
  let token=localStorage.getItem("usertoken");
  if(token){
    this.props.getRestaurant(token);
  }
}
componentDidUpdate(nxtProps,nxtState){
  if(nxtProps.restaurantList && this.props.restaurantList && nxtProps.restaurantList.length !== this.props.restaurantList.length){
    if(this.props.restaurantList.length >0)
    {this.setState({restaurantList :this.props.restaurantList})}
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
  handleRestaurantChangeSelection =(id)=>{
    let resID= id;
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
		
                <CreateUserForm 
                resID ={this.state.resID}
                handleRestaurantChangeSelection ={this.handleRestaurantChangeSelection}
                restaurantList ={this.state.restaurantList}
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