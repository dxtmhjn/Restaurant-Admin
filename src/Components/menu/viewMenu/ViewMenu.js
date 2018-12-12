import React,{Component} from 'react';

class ViewMenu extends Component{
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
      <th scope="col">Description</th>
      <th scope="col">Variant</th>
      <th scope="col">Price</th>
      <th scope="col">Type</th>
      <th scope="col">Category</th>
      <th scope="col">Created Date</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td scope="row"><strong>Biryani</strong></td>
      <td scope="row">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </td>
      <td scope="row">Half Biryani, Full Biryani</td>
      <td scope="row">Rs. 100, 180</td>
      <td scope="row"><span class="veg">Veg</span></td>
      <td scope="row">Breakfast, Lunch, Dinner</td>
      <td scope="row">27 Nov 2018</td>
      <td scope="row">
      <div className="btn-group">
      <button className="btn btn-sm btn-primary">Edit</button>
      <button className="btn btn-sm btn-danger">Delete</button>
      </div>
      </td>
     
    </tr>
  </tbody>
</table>
</div>
        </div>
        </div>
        );
    }
}

export default ViewMenu;