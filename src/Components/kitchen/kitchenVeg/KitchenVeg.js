import React, { Component } from "react";

class KitchenVeg extends Component {
  render() {
    return (
      <div className="content">
                <div className="container-fluid">
          <div className="card order-card">
            <div className="card-header">
            <span className="table-name">Table 5</span>
            <span className="float-right order-bg">Order: OD2288</span></div>
            <div className="card-body">
             
              <table className="food-table">
                <tr>
                  <td><div className="veg-food-label">Veg</div></td>
                  <td>Biryani</td>
                  <td>Full</td>
                  <td>₹ 340</td>
                  <td><div className="pending-status-label">Pending</div></td>
                  <td className="text-right">
                   <button className="status-btns">+ Approve</button>
                   <button className="status-btns">+ Cooking</button>
                   <button className="status-btns">+ Ready</button>
                    </td>
                </tr>
                <tr>
                  <td><div className="veg-food-label">Veg</div></td>
                  <td>Pasta</td>
                  <td>Half</td>
                  <td>₹ 145</td>
                  <td><div className="pending-status-label">Cooking</div></td>
                  <td className="text-right">
                   <button className="status-btns">+ Approve</button>
                   <button className="status-btns">+ Cooking</button>
                   <button className="status-btns">+ Ready</button>
                    </td>
                </tr>
              </table>
             
            </div>
          </div>

          <div className="card order-card">
            <div className="card-header">
            <span className="table-name">Table 5</span>
            <span className="float-right order-bg">Order: OD2288</span></div>
            <div className="card-body">
             
              <table className="food-table">
                <tr>
                  <td><div className="veg-food-label">Veg</div></td>
                  <td>Biryani</td>
                  <td>Full</td>
                  <td>₹ 340</td>
                  <td><div className="pending-status-label">Pending</div></td>
                  <td className="text-right">
                   <button className="status-btns">+ Approve</button>
                   <button className="status-btns">+ Cooking</button>
                   <button className="status-btns">+ Ready</button>
                    </td>
                </tr>
                <tr>
                  <td><div className="nonveg-food-label">Non Veg</div></td>
                  <td>Pasta</td>
                  <td>Half</td>
                  <td>₹ 145</td>
                  <td><div className="pending-status-label">Cooking</div></td>
                  <td className="text-right">
                   <button className="status-btns">+ Approve</button>
                   <button className="status-btns">+ Cooking</button>
                   <button className="status-btns">+ Ready</button>
                    </td>
                </tr>
              </table>
             
            </div>
          </div>
          </div>
        
        
      </div>
      
    );
  }
}

export default KitchenVeg;
