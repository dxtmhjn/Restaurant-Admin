import HttpClient from "../../service/api";


// toaster
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addMenu = (bodyParams) => {
 
    var body ={
        "name": bodyParams.menuname,
        "category": bodyParams.category,
        "description": bodyParams.foodDesc,
        "active": bodyParams.active,
        "foodtype":bodyParams.foodtype,
        "createddate": new Date(),
        "type":"menu" ,
        "variant":bodyParams.variants,
        foodtype :bodyParams.foodtype,
        restaurant_id :bodyParams.restaurant_id,
        chain_id :bodyParams.chain_id,
        imageurl:bodyParams.previewSrc

    }
    const httpClient = new HttpClient();
    let url = 'restaurant/addrestaurant';
    return httpClient.post(url, body)
        .then(response => {

              if (response.data && response.data.ok) {
                toast.success("success Notification")
                    return true;
                }else{
                    toast.error("Error Notification !")
                    return false;
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}