import HttpClient from "../../service/api";
import {apiURL} from '../../constants/constant';

// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addresturant = (bodyParams) => {
 
    const httpClient = new HttpClient();
    let url = 'restaurant/addrestaurant';
    return httpClient.post(url, bodyParams)
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
 
    const httpClient = new HttpClient();
    let url = 'user/add';
    return httpClient.post(url, bodyParams)
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
