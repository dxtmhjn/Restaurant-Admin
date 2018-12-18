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
              <span className="float-right order-bg">Order: OD2288</span></div>
              <div className="card-body">
               
                <table className="food-table">
                {
                  item.value.variantselected.map((order,id)=>{
                    return(
                      
                      <tr key={id}>
                      <td><div className="veg-food-label">{order.foodtype}</div></td>
                      <td>{order.variantname}</td>
                      <td>Full</td>
                      <td>₹ 340</td>
                      <td><div className="pending-status-label">Pending</div></td>
                      <td className="text-right">
                       <button className="status-btns">+ Approve</button>
                       <button className="status-btns">+ Cooking</button>
                       <button className="status-btns">+ Ready</button>
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
