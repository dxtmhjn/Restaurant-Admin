import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateRestaurantChain from '../../Components/Admin/CreateRestaurantChain';
import Header from '../../base/header/Header';
import MainBody from '../../base/mainBody/MainBody';
class ChainRestaurantConainer extends Component {

    render() {
		return (
			<div>
         {/* <Header  ></Header>
            <MainBody > */}
                <CreateRestaurantChain restaurantList ={this.props.restaurantList}/>
                {/* </MainBody> */}
                </div>
        )
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
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChainRestaurantConainer));