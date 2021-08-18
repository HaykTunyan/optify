import { ToastContainer, toast, cssTransition } from 'react-toastify';
import React from 'react';

const Transition = cssTransition({
  enter: 'slide-in-top',
  exit: 'slide-out-top',
});

const Toast = {
  Provider: () => <ToastContainer position='top-center' transition={Transition}  />,
  notify: toast,
};
export default Toast;
