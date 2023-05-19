// src/components/ToastContainer.tsx
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => {
  return (
    <ToastContainer 
      autoClose={5000} 
    //   position='top-left'
      style={{ fontSize: '1.5em' }} // Increase font-size to make toasts bigger
    />
  );
};