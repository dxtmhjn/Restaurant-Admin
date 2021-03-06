import HttpClient from "../../service/api";
import {apiURL} from '../../constants/constant';

// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllChainresturant = (bodyParams) => {
 

    const httpClient = new HttpClient();
    let url = 'restaurant/getAllChainRestaurant';
    return httpClient.get(url)
        .then(response => {

            if (response && response.data  && response.data.data) {
                //toast.success("success Notification")
                return {status :true ,data :response.data.data};
                }else{
                   // toast.success("success Notification")
                   return {status :false ,data :null};
                }
            
        })
        .catch(error => {
            console.log(error);
        });
}

export const getChainresturantByChainID = (id) => {
 
    
    const httpClient = new HttpClient();
    let url = 'restaurant/getChainRestaurantByChainID/' + id;
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