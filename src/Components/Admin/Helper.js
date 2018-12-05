import HttpClient from "../../service/api";
import {apiURL} from '../../constants/constant';

// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addresturant = (bodyParams) => {
 
    var body ={
        "restaurantname": bodyParams.restaurantname,
        "address": bodyParams.address,
        "description": bodyParams.description,
        "active": "true",
        "createddate": new Date(),
        "type":"restaurant" //  bodyParams.type
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
export const addChainresturant = (bodyParams) => {
 
    var body ={
        "restaurantname": bodyParams.restaurantname,
        "address": bodyParams.address,
        "description": bodyParams.description,
        "active": "true",
        "ParentID"  :bodyParams.parent_id,
        "createddate": new Date(),
        "type":"chain" // bodyParams.type
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
export const adduser = (bodyParams) => {
 
    let userobj={
        "name": bodyParams.name,
    "password": bodyParams.password,
    "email": bodyParams.email,
    "mobile": bodyParams.mobile,
    "restaurant_id": bodyParams.restaurent_id,
    "active": true,
    "createdDate": new Date(),
    "chain_id": bodyParams.chain_id,
    "role": bodyParams.role,
    "type": "user"
}
    const httpClient = new HttpClient();
    let url = 'user/add';
    return httpClient.post(url, userobj)
        .then(response => {

              if (response.data && response.data.ok) {
                toast.success("success Notification")
                    return response.data;
                }else{
                    toast.success("success Notification")
                    return false;
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}


export const getChainresturant = (id) => {
 
    
    const httpClient = new HttpClient();
    let url = 'restaurant/getChainRestaurant/' + id;
    return httpClient.get(url)
        .then(response => {

              if (response && response.data) {
                toast.success("success Notification")
                    return response.data;
                }else{
                    toast.error("Error Notification !")
                    return false;
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}

export const removeUser = (id) => {
    const httpClient = new HttpClient();
    let url = 'userlist/' + id;
    return httpClient.get(url)
        .then(response => {

              if (response && response.data) {
                toast.success("success Notification")
                    return response.data;
                }else{
                    toast.error("Error Notification !")
                    return false;
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}