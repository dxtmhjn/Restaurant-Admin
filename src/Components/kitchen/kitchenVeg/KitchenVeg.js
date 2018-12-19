import React, { Component } from "react";
import axios from 'axios';
import {apiURL} from '../../../constants/constant';
import * as _ from 'lodash';

class KitchenVeg extends Component {
  state={
    vegRecipes:[]
  }

getOrders=()=>{
  let _self = this
  axios({
    method:'get',
    url:apiURL.SERVERBASE_URL+"/kitchen/getCurrentOrders",
    responseType:'json'
  })
    .then(function(response) {
      if(response){
        console.log(response);
    _self.setState(
      {
        vegRecipes:response.data.rows
      }
      ,()=>{
     
      })
    }
    
  });
}


getOrdersByRestaurantID=(rest_id)=>{
  
}
handleStatus=(id,key)=>{
  let _self = this
  let _params ={
    [key] :true
  }
  axios({
    method:'post',
    url:apiURL.SERVERBASE_URL+"/kitchen/updateOrders/" +id,
    responseType:'json',
    body :_params
  })
    .then(function(response) {
      if(response){
        console.log(response);
    _self.setState(
      {
        vegRecipes:response.data.rows
      }
      ,()=>{
     
      })
    }
    
  });
}

  componentDidMount(){
    this.getOrders();
    
  }
  


  render() {
    let fetchVegOrders= this.state.vegRecipes.map(
  (item,index)=>{
    return(
  <div className="card order-card" key={index}>

              <div className="card-header">
              <span className="table-name">{item.value.tableNo}</span>
              <span className="float-right order-bg">Order: {item.value._id}</span></div>
              <div className="card-body">
               
                <table className="food-table">
                {
                  item.value.variantselected.map((order,id)=>{
                    return(
                      
                      <tr key={id}>
                      <td><div className="veg-food-label">{order.foodtype ? order.foodtype : 'veg'}</div></td>
                      <td>{order.variantname}</td>
                      <td>Full</td>
                      <td>₹ 340</td>
                      <td><div className="pending-status-label">Pending</div></td>
                      <td className="text-right">
                       <button className="status-btns" onClick={()=>this.handleStatus(order._id,'isaccepted')}>+ Approve</button>
                       <button className="status-btns" onClick={()=>this.handleStatus(order._id,'ispreparing')}>+ Cooking</button>
                       <button className="status-btns" onClick={()=>this.handleStatus(order._id,'isready')}>+ Ready</button>
                        </td>
                    </tr>
                    )

                  }
    )
                }
                 
                </table>
               
              </div>
            </div>
  )
  }
      );
    
  

    return (
      <div className="content">
                <div className="container-fluid">
          {fetchVegOrders}

          </div>
        
        
      </div>
      
    );
  }
}

export default KitchenVeg;
