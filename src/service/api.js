
/*/#region Copyright(c) 2018 D-Driven All rights are reserved
* =============================================================================================================================================
* <copyright company="D-Driven">
* COPYRIGHT (c) 2018 D-Driven (P) Ltd.
* ALL RIGHTS ARE RESERVED. REPRODUCTION OR TRANSMISSION IN WHOLE OR IN PART,
* ANY FORM OR BY ANY MEANS, ELECTRONIC, MECHANICAL OR OTHERWISE,
* WITHOUT THE PRIOR PERMISSION OF THE COPYRIGHT OWNER.
* </copyright>
* =============================================================================================================================================
* Created By :
* Module :  API global configuration
* Description : */
/* This API wrapper is useful because it:
   1. Centralizes our Axios default configuration.
   2. Abstracts away the logic for determining the baseURL.
   3. Provides a clear, easily consumable list of JavaScript functions
      for interacting with the API. This keeps API calls short and consistent.

* Date:31-JULY-2018.
* =============================================================================================================================================
 *
 * #endregion
 * */


//library import section Begin
import axios from 'axios';
import { apiURL } from "../constants/constant";
//library import section End

class HttpClient {
    constructor() {
        this.api = null;
    }
    
  //it is a method which initalize http instance
    getInitializedApi() {
        if (this.api) return this.api; // return initialized api if already initialized.
        return (this.api = axios.create({
            baseURL: this.getBaseUrl(),
            responseType: 'json',
            headers :{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
              
        }));
    }

     //it is a method which return base url
    getBaseUrl() {
        // Insert logic here to get the baseURL by either:
        // 1. Sniffing the URL to determine the environment we're running in.
        // 2. Looking for an environment variable as part of the build process.
        return apiURL.SERVERBASE_URL
    }

 //it is a method which use at the time of get
    get(url) {
        return this.getInitializedApi().get(url);
    }

    //it is a method which use at the time of Post
    post(url, data) {
        return this.getInitializedApi().post(url, data);
    }

    getallList(requestList) {
        return axios.all(requestList.map(l => axios.get(l)));
    }

    postallList(requestList) {
        return axios.all(requestList.map(l => axios.request(l)));
    }
}

export default HttpClient
