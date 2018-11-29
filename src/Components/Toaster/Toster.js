import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toaster=()=> {
    notify = (rvalue) => {
        if(rvalue=="success"){
          toast.success("success Notification")
        }
       else if(rvalue=="error"){
          toast.error("Error Notification !")
        }
        else if(rvalue=="warning"){
          toast.warn("Warning Notification !")
        }
        else if(rvalue=="info"){
          toast.info("Info Notification !")
        }
        else{
          toast("Wow so easy !")
        }
      
      }

      return(
          <notify />
      )
}

export default toaster;