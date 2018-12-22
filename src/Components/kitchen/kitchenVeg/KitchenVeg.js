import React, { Component,Fragment } from "react";
import axios from 'axios';
import {apiURL} from '../../../constants/constant';
import * as _ from 'lodash';
import { UpdateOrderStatus} from '../Helper';
import moment from 'moment';
class KitchenVeg extends Component {
  state={
    vegRecipes:[]
  }

getOrders=()=>{
  let _self = this
  let currentdate =  moment().format('YYYY/MM/DD HH:mm:ss');
  axios({
    method:'post',
    url:apiURL.SERVERBASE_URL+"kitchen/getCurrentOrders" ,
    responseType:'json',
    data :{date :currentdate}
  })
    .then(function(response) {
      if(response){
        console.log(response);
    _self.setState(
      {
        vegRecipes:response.data
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
    
      "key" :key,
      "value" :true
      
    
  }
  UpdateOrderStatus(id,_params)
}

  componentDidMount(){

    var intervalId = setInterval(()=>this.getOrders(), 1000);
    this.setState({intervalId: intervalId});
    
    
  }
  
  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
 }

  render() {
    let fetchVegOrders= this.state.vegRecipes.map(
  (item,index)=>{
    return(
  <div className="card order-card" key={index}>

              <div className="card-header">
              <span className="table-name">{item.tableNo && item.tableNo !== undefined ? item.tableNo :"Table Number Not Found"}</span>
              <span className="float-right order-bg">Order: {item._id}</span></div>
              <div className="card-body">
               
                <table className="food-table">
                <tr >
                       <td className="text-right">
                       <button className="status-btns" onClick={()=>this.handleStatus(item._id,'isaccepted')}>+ Approve</button>
                       <button className="status-btns" onClick={()=>this.handleStatus(item._id,'ispreparing')}>+ Cooking</button>
                       <button className="status-btns" onClick={()=>this.handleStatus(item._id,'isready')}>+ Ready</button>
                        </td>
                    </tr>
                {
                       
                      
                  item.variantselected.map((order,id)=>{
                    return(
                 
                      <tr key={id}>
                      <td><div className="veg-food-label">{order.foodtype ? order.foodtype : 'veg'}</div></td>
                      <td>{order.variantname}</td>
                      <td>{order.quantity}</td>
                      <td>₹ {order.price}</td>
                      <td><div className="pending-status-label">Pending</div></td>
                      {/* <td className="text-right">
                       <button className="status-btns" onClick={()=>this.handleStatus(item._id,'isaccepted')}>+ Approve</button>
                       <button className="status-btns" onClick={()=>this.handleStatus(item._id,'ispreparing')}>+ Cooking</button>
                       <button className="status-btns" onClick={()=>this.handleStatus(item._id,'isready')}>+ Ready</button>
                        </td> */}
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
