import React,{Component} from 'react';
import {apiURL} from '../../../constants/constant';
import axios from 'axios';

class ViewMenu extends Component{

  state ={
    vegRecipes :[]
  }
  componentDidMount(){
    this.viewMenuItems();
  }
  viewMenuItems=()=>{
    let _self = this
    axios({
      method:'post',
      url:apiURL.SERVERBASE_URL+"/menu/getAllMenu",
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
  handleDelete=(id)=>{
//menu/deleteMenu
let _self = this
axios({
  method:'post',
  url:apiURL.SERVERBASE_URL+"menu/deleteMenu/" + id,
  responseType:'json'
})
  .then(function(response) {
    if(response){
      console.log(response);
      _self.viewMenuItems();
  }
  
});
  }
    render(){
        return (
          <div className="content">
                <div className="container-fluid">
         <div className=" card m-b-30 card-body card-container">
           <table className="table table-striped food-menu">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Variant Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Type</th>
      <th scope="col">Category</th>
      <th scope="col">Created Date</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  { this.state.vegRecipes && this.state.vegRecipes.length >0 ?this.state.vegRecipes.map(
  (item,index)=>{
    
    
     return item.value.variant && item.value.variant.length >0 ? 
     item.value.variant.map(x=>{
        return (
<tr>
      <td scope="row">{index +1}</td>
      <td scope="row"><strong>{item.value.name}</strong></td>
      <td scope="row"><strong>{x.variantname}</strong></td>
      <td scope="row">{x.quantity}</td>
      <td scope="row">Rs. {x.price}</td>
      <td scope="row"><span class="veg">{item.value.foodtype}</span></td>
      <td scope="row">{item.value.category}</td>
      <td scope="row">{item.value.createdDate}</td>
      <td scope="row">
      <div className="btn-group">
      {/* <button className="btn btn-sm btn-primary">Edit</button> */}
      <button className="btn btn-sm btn-danger" onClick={()=>this.handleDelete(item.id)}>Delete</button>
      </div>
      </td>
     
    </tr>

        )
      }) : null
    
  }): <tr><td>No Record</td></tr>}
    
  </tbody>
</table>
</div>
        </div>
        </div>
        );
    }
}

export default ViewMenu;