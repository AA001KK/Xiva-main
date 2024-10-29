// components/ErrorAlert.jsx
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const showErrorAlert = (message) => {
  MySwal.fire({
    title: "Ma'lumot qo'shishda xatolik yuz berdi",
    text: message,
    icon: "warning",
    confirmButtonText: "OK",
  });
};

export default showErrorAlert;
