import { ToastContainer, toast } from 'react-toastify';
import React from 'react'
import gifNotificacion from '../../../assets/icons/icons8-notification.gif'
import healthIcon from '../../../assets/icons/icons8-health-64.png'
import rightArrowIcon from '../../../assets/icons/icons8-double-right.gif'
import upArrowIcon from '../../../assets/icons/icons8-double-up.gif'
import 'react-toastify/dist/ReactToastify.css';
import { ConsultorioDetallado } from '../../../codegen_output'


export const notifyNextTurn = (
  patientName: String, 
  consul_id: String,
  officesList: Array<ConsultorioDetallado>) => {
    const consulIdInt = Number(consul_id)
    if (officesList.some((office) => office.id === consulIdInt)){
      toast(
        <div>
          <h2>
            {/* Aviso */}
            <div className='centered-content'>
              <img src={gifNotificacion} className='mezclar-con-fondo centered-content'/>
              <span className='toast-text'>{'  '}{patientName}</span>
              <img src={rightArrowIcon} className='mezclar-con-fondo'/>
              <span className='toast-text mx-1'>{'   Consultorio '} {consul_id}</span>
            </div>
          </h2> 
        </div>,
        {
          // type: "success",
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
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
      // style={{ width: "500px" }}
    />
  );
};
