import React,{Component,Fragment} from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import moment from 'moment';
import Axios from 'axios';
import Dropzone from 'react-dropzone';
import Loader from 'react-loader-advanced';
class AddMenuItem extends Component{

  state={
     previewSrc:"",
     isImageUploading :false,
     foodtype:'',
     variants: [{ variantname: '' ,price:''}],
  }
      cDate=moment().format("DD MMM YYYY");
        onSubmit =  values => {
        let params =values;
        params.previewSrc= this.state.previewSrc;
        this.props.handleaddRestaurantMenu(params);
      }
      
      handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.variants.map((variant, sidx) => {
          if (idx !== sidx) return variant;
          return { ...variant, [evt.target.name]: evt.target.value };
        });
        
        this.setState({ variants: newShareholders });
      }
      handleSubmit = () => {
        this.props.handleaddRestaurantMenu(this.state);
    }
  

      imgPreviewHnadler=(event)=>{
        const cloudImgUrl = "https://api.cloudinary.com/v1_1/dul3iybvg/upload";
        const cloudPreSets = "gjvkq3dx";
        const fileSrc = event.target.files[0];
        const formData = new FormData();
        formData.append('file', fileSrc);
        formData.append('Upload_preset', cloudPreSets );

        Axios({
          url: cloudImgUrl,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: formData
        }).then(response=>{
          console.log(response);
         this.state.previewSrc=response.data;

        }).catch(error=>{
          console.log(error);
        })
      }
      handleChange = (event) => {
        this.setState({
            // use dynamic name value to set our state object property
            [event.target.name]: event.target.value
        });
        //
    }
      handleAddShareholder = () => {
        this.setState({ variants: this.state.variants.concat([{ variantname: '' ,price:''}]) });
      }
      
      handleRemoveShareholder = (idx) => () => {
        this.setState({ variants: this.state.variants.filter((s, sidx) => idx !== sidx) });
      }
      handleDrop = files => {
        const cloudPreSets = "gjvkq3dx";
        let currentInstance =this;
        // Push all the axios request promise into a single array
        this.setState({isImageUploading :true} ,()=>{
        const uploaders = files.map(file => {
          // Initial FormData
          const formData = new FormData();
          formData.append("file", file);
          formData.append("tags", `codeinfuse, medium, gist`);
          formData.append("upload_preset", cloudPreSets); // Replace the preset name with your own
          formData.append("api_key", "724369578258923"); // Replace API key with your own Cloudinary key
          formData.append("timestamp", (Date.now() / 1000) | 0);
          
          // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
          return Axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url // You should store this URL for future references in your app
            currentInstance.setState({previewSrc :fileURL})
          })
        });
     
      
        // Once all the files are uploaded 
        Axios.all(uploaders).then(() => {
          currentInstance.setState({isImageUploading :false})
        }); 
      });
      }
    render(){
        
        return (
          <div className="content">
                <div className="container-fluid">

         <div className=" card m-b-30 card-body card-container">
            <Loader  show={this.state.isImageUploading} message={'loading'}>
           
            <form   >
                <div className="row">
                    <div className="col-lg-6 form-group">
                    <label>Restaurant ID</label>
            
            <select onChange={(e)=> this.props.handleRestaurantChangeSelection(e)}  name="restaurant_id"   className="form-control form-control-sm">
            <option value="0">Choose Restaurant</option>
            { this.props.restaurantList && this.props.restaurantList.length >0
                     ? 
                    
                     this.props.restaurantList.map(item => {
                            return (
                                    <option
                                      key={item._id}
                                      value={item._id}>{item.restaurantname}</option>
                                    );
                        }) :  <option value="No Restaurant">No Restaurant</option>}
            </select>
                    </div>
                    <div className="col-lg-6 form-group">
                    <label>Chain ID</label>
            <select
              name="chain_id"
              className="form-control form-control-sm"
            >
             <option value="0">Choose Chain Restaurant</option>
                        { this.props.restaurantChainList && this.props.restaurantChainList.length >0
                     ? 
                    
                     this.props.restaurantChainList.map(item => {
                            return (
                                    <option
                                      key={item._id}
                                      value={item._id}>{item.restaurantname}</option>
                                    );
                        }) :  <option value="No Chain Restaurant">No Restaurant</option>}
            </select>
                    </div>
                    <div className="col-lg-6 form-group">
                    <label>Type</label>
            <input
              name="type"
              value="menu"
              type="text" disabled
              className="form-control form-control-sm"
              
            />
                    </div>
                    
                    
                    <div className="col-lg-6 form-group form-group">
                    <label>Name</label>
            <input
              name="menuname"
              
              type="text" 
              className="form-control form-control-sm"
              value={this.state.menuname}
              onChange={this.handleChange}
            />
                    </div>
                    <div className="col-lg-6 form-check">
                    <label>Food Type</label>               
                   <div className="row">
                   <div className="col pl-3">
                   <input
                  name="foodtype"
                 
                  type="radio"
                  value="veg"
                  className="ml-2"
                  checked={this.state.foodtype === 'veg'} onChange={(e) => this.setState({ foodtype: e.target.value })}
                />
               <label className="ml-2">Veg</label>
                   </div> 
                   <div className="col">
                   <input
                  name="foodtype"
                  
                  type="radio"
                  value="nonveg"
                  className=" "
                  checked={this.state.foodtype === 'nonveg'} onChange={(e) => this.setState({ foodtype: e.target.value })}
                />
               <label className="ml-2"> Non-Veg
              </label>
                   </div> 
                   
            
              </div>
                    </div>
                    <div className="col-lg-6 form-group ">
                    <label>Category</label>
            <select name="category"   onChange={this.handleChange} className="form-control form-control-sm">
              <option value="breakfast">Breakfast</option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="beverages">Beverages</option>
              <option value="starters">Starters</option>
              <option value="sweets">Sweets</option>
            </select></div>

            <div className="col-lg-6 form-group ">
                    <label>Status</label>
                    
            <select  onChange={this.handleChange} name="active" component="select"  className="form-control form-control-sm">
              <option value="true" selected>Active</option>
              <option value="false">InActive</option>
            </select></div>
            
            <div className="col-lg-6 form-group">
                    <label>Description</label>
                   <textarea
                    value={this.state.description}
                    onChange={this.handleChange}
                   name="foodDesc"  className="form-control form-control-sm"  rows="2" />
         
                    </div>
                    
                    <div className="col-lg-12 form-group">
                    <label>Variant</label>
                  <div className="float-right">
                  <button
                type="button" 
                className="btn btn-sm btn-primary mr-2" onClick={this.handleAddShareholder}>
                Add
              </button>
              <button type="button" className="btn btn-sm btn-primary" >
                Delete
              </button>
            </div>
            
            <br/>
           
            <br/>
              
                 
                  
                  {this.state.variants.map((shareholder, idx) => (
          <div className="row mb-2">
           <div className="col-lg-3">  <label>Variant. {idx} </label></div>
                  
           <div className="col-lg-4">
            <input
              name="variantname"
              component="input"
              placeholder="Variant Name"
              className="form-control form-control-sm"
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            </div>
            <div className="col-lg-4">
                  
                  <input
                      name="price"
                      component="input"
                      placeholder="Price"
                      value={shareholder.price}
              onChange={this.handleShareholderNameChange(idx)}
                      className="form-control form-control-sm"
                    />
                    </div>
            
            <div className="col-lg-1">
                  <span onClick={this.handleRemoveShareholder(idx)} className="btn btn-sm btn-danger" >
                      x
                    </span></div>
                  </div>
        ))}
                  
                  
                 
                  
                  
                    
                    
                   
               
                    </div>
                    
                    <div className="col-lg-12  form-group">
                   <div className="card text-center">
                  
                  <div className="card-footer bg-default ">
                  <label className="text-default">Select New Image 
                   {/* <input name="foodimg"  type="file" className="form-control" style={{display: 'none'}}
                    /> */}
                    <Dropzone 
                  onDrop={this.handleDrop} 
                  multiple 
                  accept="image/*" >
                  <p>Drop your Images or click here to upload</p>
                  </Dropzone>
                   </label>
                  <div>
                     <img src={this.state.previewSrc}/>
                   </div>                   </div>
                    </div>
                   </div>
                    
                    <div className="col-lg-12 form-group text-center">
                    <button type="button" className="btn btn-large btn-warning" onClick={this.handleSubmit} >
                Submit
              </button>
                
                    </div>
                </div>
            

          
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          
          
            </Loader>
            </div>
        </div>
        
        </div>
        );
    }
}

export default AddMenuItem;