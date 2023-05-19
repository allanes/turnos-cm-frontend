import { ToastContainer, toast } from 'react-toastify';
import React from 'react'
import gifNotificacion from '../../../assets/icons/icons8-notification.gif'
import healthIcon from '../../../assets/icons/icons8-health-64.png'
import rightArrowIcon from '../../../assets/icons/icons8-double-right.gif'
import upArrowIcon from '../../../assets/icons/icons8-double-up.gif'
import 'react-toastify/dist/ReactToastify.css';


export const notifyNextTurn = (message: String, consul_id: String) => {
  toast(
    <div>
      {/* <h2>
        Aviso
      </h2> */}
      <div className='centered-content'>
        <img src={gifNotificacion} className='mezclar-con-fondo centered-content'/>
        <p>Consultorio {consul_id}</p>
        <img src={upArrowIcon} className='mezclar-con-fondo'/>
        <p>{message}</p>        
      </div>
    </div>,
    {
      // type: "success",
      position: toast.POSITION.TOP_RIGHT,
    }
  );
};

export const Toast = () => {
  return (
    <ToastContainer 
      autoClose={5000} 
      // hideProgressBar
      newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      // theme='light'
      toastClassName="toast-class" // Use this class to style your toast, replace with your class
    />
  );
};
