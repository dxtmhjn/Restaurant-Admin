import React, { Component } from "react";

class KitchenVeg extends Component {
  render() {
    return (
      <main>
          <div className="main-part">
          <section className="home-icon bg-skeen">
          <div className="container">
          <div className="card order-card">
            <div className="card-header">
            <span className="">Table 5</span>
            <span className="float-right">Order: OD2288</span></div>
            <div className="card-body">
             
              <table className="food-table">
                <tr>
                  <td><div className="veg-food-label">Veg</div></td>
                  <td>Biryani</td>
                  <td>Full</td>
                  <td>₹ 340</td>
                  <td><div className="pending-status-label">Pending</div></td>
                  <td></td>
                </tr>
                <tr>
                  <td><div className="nonveg-food-label">Non Veg</div></td>
                  <td>Pasta</td>
                  <td>Half</td>
                  <td>₹ 145</td>
                  <td><div className="pending-status-label">Cooking</div></td>
                  <td></td>
                </tr>
              </table>
             
            </div>
          </div>
          <div className="card order-card">
            <div className="card-header">Table 15</div>
            <div className="card-body">
              <p>hi</p>
            </div>
          </div>
          </div>
        </section>
        
      </div>
      </main>
    );
  }
}

export default KitchenVeg;
