import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
  return <Toaster position='top-center' toastOptions={{ duration: 4500 }} />;
};

export default ToastContainer;
