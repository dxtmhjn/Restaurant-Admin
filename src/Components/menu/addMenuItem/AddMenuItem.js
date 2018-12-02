import React,{Component} from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import moment from 'moment';
import Axios from 'axios';
import Dropzone from 'react-dropzone'
import Loader from 'react-loader-advanced';
class AddMenuItem extends Component{

  state={
     previewSrc:"",
     isImageUploading :false
  }
    cDate=moment().format("DD MMM YYYY");
     onSubmit = async values => {
        
        window.alert(JSON.stringify(values, 0, 2))
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
          <main>
          <div className="main-part">
          <section className="home-icon bg-skeen">
          <div className="container">
          <div className="row ">
          <div className="col-md-5 col-sm-5 col-xs-12">
          
          <div className="card-container"></div>
          
          </div>
          <div class="col-md-7 col-sm-7 col-xs-12 wow fadeInDown animated" >
         
         <div className="card-container">
            <Loader  show={this.state.isImageUploading} message={'loading'}>
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
            
            <Field name="restaurant_id" component="select"  className="form-control form-control-sm">
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
            </Field>
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
                   <div className="card col-md-8 offset-2   text-center">
                  
                  <div className="card-footer bg-info ">
                  <label className="text-white">Select New Image 
                   {/* <input name="foodimg"  type="file" className="form-control" style={{display: 'none'}}
                    /> */}
                    <Dropzone 
  onDrop={this.handleDrop} 
  multiple 
  accept="image/*" 
 
>
  <p>Drop your files or click here to upload</p>
</Dropzone>
                   </label>
                  <div>
                     <img src={this.state.previewSrc}/>
                   </div>                   </div>
                    </div>
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
            </Loader>
            </div>
        </div>
        </div>
        </div>
            </section>
        </div>
    </main>
        );
    }
}

export default AddMenuItem;