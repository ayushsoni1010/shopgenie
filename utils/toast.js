import { toast } from "react-toastify";

const toastHelper = {
  alertToastHandling: (errorMessage) => {
    toast(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      hideProgressBar: false,
    });
  },
};

export default toastHelper;
