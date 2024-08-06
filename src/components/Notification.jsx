import Swal from "sweetalert2";

const showSuccessAlert = (message) => {
   Swal.fire({
     title: "Success!",
     text: message,
     icon: "success",
     confirmButtonText: "OK",
     confirmButtonColor: "#EB8426",
   });
};

const showErrorAlert = (err) => {
   Swal.fire({
     title: "Error!",
     text: err.response.data.message,
     icon: "error",
     confirmButtonText: "Try Again",
     confirmButtonColor: "#EB8426", 
   });
};

export {showErrorAlert, showSuccessAlert};