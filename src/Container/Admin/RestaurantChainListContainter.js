import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateUser from '../../Components/Admin/CreateUserForm';
import {getAllChainresturant} from "./Helper";
import RestaurantChainList from "../../Components/Admin/RestaurantChainList";

class RestaurantChainListContainter extends Component {

state={
  restaurantChainList :[]
}

componentDidMount(){
    getAllChainresturant().then(res=>{
        if(res){
            this.setState({restaurantChainList :this.addChainItemtoArray(res)})
        }
    })
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
  
    render() {
        const { navigation } = this.props;
		return (
      <div>
 <button type="button"
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('login')}
          >Click Me!</button>
                <RestaurantChainList 
              
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
      checkCredentails:( obj ) => {
       
    
    }
}
  }
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantChainListContainter));