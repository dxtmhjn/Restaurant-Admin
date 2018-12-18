import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import AddMenuItem from '../../Components/menu/addMenuItem/AddMenuItem';
import {getChainresturant} from "../../Components/Admin/Helper";
import {addMenu} from './Helper';
import {fetchRestaurants} from '../../Components/Login/actions';
class AddMenuContainer extends Component {
  
  state={
    restaurantChainList :[]
  }
  componentDidMount(){
    let token=localStorage.getItem("usertoken");
    if(token){
      this.props.getRestaurant(token);
    }
  }
  handleaddRestaurantMenu(params){
      if(params){
        addMenu(params).then(result=>{

        })
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
     
                <AddMenuItem restaurantList ={this.props.restaurantList}
                handleRestaurantChangeSelection={this.handleRestaurantChangeSelection}
                handleaddRestaurantMenu={this.handleaddRestaurantMenu}
                restaurantChainList= {this.state.restaurantChainList}
                />
               
        
      
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
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddMenuContainer));