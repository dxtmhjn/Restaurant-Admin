import React, { Component } from "react";
import { connect ,} from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreateRestaurantChain from '../../Components/Admin/CreateRestaurantChain';
import {getChainresturantByChainID} from './Helper';
class ChainRestaurantConainer extends Component {
state ={
  editData :[]
}
  componentDidMount(){
    const { match: { params } } = this.props;
    if(params && params.id)
      {getChainresturantByChainID(params.id).then(res=>{
        if(res){
          this.setState({editData :this.addChainItemtoArray(res)})
        }
      })}
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
		return (
			<div>
         {/* <Header  ></Header>
            <MainBody > */}
                <CreateRestaurantChain
                editData= {this.state.editData}
                restaurantList ={this.props.restaurantList}/>
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