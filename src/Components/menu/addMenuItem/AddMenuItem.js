import React,{Component} from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import moment from 'moment';

class AddMenuItem extends Component{

    cDate=moment().format("DD MMM YYYY");
     onSubmit = async values => {
        
        window.alert(JSON.stringify(values, 0, 2))
      }
      
    render(){
        
        return (
            <div className="wrapper">
            <div className="card-container">
            <div className="card">
            <div className="card-header">Add Item To Menu</div>
            <div className="card-body">
            
            <Form
            onSubmit={this.onSubmit}
            initialValues={{ type:'menu', foodtype:'veg', active:true, createdDate:this.cDate}}
            mutators={{
                ...arrayMutators
              }}
            render={({ mutators: { push, pop }, handleSubmit,submitting, pristine, invalid, values }) => (
            <form>
                <div className="row">
                    <div className="col-lg-6 form-group">
                    <label>Restaurant ID</label>
            <Field
              name="restaurant_id"
              component="input"
              type="text" disabled
              className="form-control form-control-sm"
            />
                    </div>
                    <div className="col-lg-6 form-group">
                    <label>Chain ID</label>
            <Field
              name="chain_id"
              component="input"
              type="text" disabled
              className="form-control form-control-sm"
            />
                    </div>
                    <div className="col-lg-6 form-group">
                    <label>Type</label>
            <Field
              name="type"
              component="input"
              type="text" disabled
              className="form-control form-control-sm"
            />
                    </div>
                    <div className="col-lg-6 form-group">
                    <label>Created Date</label>
            <Field
              name="createdDate"
              component="input"
              type="text" 
              value={this.cDate}
              placeholder={this.cDate}
              className="form-control form-control-sm"
            />
                    </div>
                    
                    <div className="col-lg-6 form-group form-group">
                    <label>Name</label>
            <Field
              name="menuname"
              component="input"
              type="text" 
              className="form-control form-control-sm"
            />
                    </div>
                    <div className="col-lg-6 form-check">
                    <label>Food Type</label>               
                   <div className="row">
                   <div className="col pl-3">
                   <Field
                  name="foodtype"
                  component="input"
                  type="radio"
                  value="veg"
                  className="ml-2"
                  className=""
                />
               <label className="ml-2">Veg</label>
                   </div> 
                   <div className="col">
                   <Field
                  name="foodtype"
                  component="input"
                  type="radio"
                  value="nonveg"
                  className=" "
                />
               <label className="ml-2"> Non-Veg
              </label>
                   </div> 
                   
            
              </div>
                    </div>
                    <div className="col-lg-6 form-group form-group">
                    <label>Toppings</label>
            <Field name="category" component="select"  className="form-control form-control-sm">
              <option value="breakfast">Breakfast</option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="beverages">Beverages</option>
              <option value="starters">Starters</option>
              <option value="sweets">Sweets</option>
            </Field></div>

            <div className="col-lg-6 form-group form-group">
                    <label>Status</label>
            <Field name="active" component="select"  className="form-control form-control-sm">
              <option value="true" selected>Active</option>
              <option value="false">InActive</option>
            </Field></div>
                    
                    <div className="col-lg-6 form-group">
                    <label>Variant</label>
                  <div className="float-right">
                  <button
                type="button" 
                className="btn btn-sm btn-success"
                onClick={() => push('variant', undefined)}>
                +
              </button>
              <button type="button" className="btn btn-sm btn-danger" onClick={() => pop('variant')}>
                x
              </button>
            </div>
            
            <br/>
           
            <br/>
              
            
                    <FieldArray name="variant" className="form-group">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={name}>
                  <div className="row">
                  <div className="col-lg-2">  <label>Variant. #{index + 1}</label></div>
                  <div className="col-lg-4">
                  <Field
                      name={`${name}.variantname`}
                      component="input"
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="col-lg-4">
                  
                  <Field
                      name={`${name}.price`}
                      component="input"
                      placeholder="Price"
                      className="form-control form-control-sm"
                    />
                    </div>
                  <div className="col-lg-1">
                  <span
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }} className="btn btn-sm btn-danger" >
                      x
                    </span></div>
                  </div>
                  
                    
                    
                    
                  </div>
                ))}
            </FieldArray>
                    </div>
                    <div className="col-lg-6 form-group">
                    <label>Description</label>
                   <Field name="foodDesc" component="textarea" className="form-control" rows="5" />
         
                    </div>
                    <div className="col-lg-6 offset-6 form-group">
                    <label>Image Upload</label>
                   <Field name="foodimg" component="input" type="file" className="form-control" />
         
                    </div>
                    
                    <div className="col-lg-12 form-group text-center">
                    <button type="submit" className="btn btn-sm btn-primary" disabled={submitting || pristine}>
                Submit
              </button>
                
                    </div>
                </div>
            

          
          <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
            )}
            />
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default AddMenuItem;