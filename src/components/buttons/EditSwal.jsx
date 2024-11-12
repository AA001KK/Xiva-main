import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import publicAxios from "../../api";
import { toast } from "react-toastify";
const AddSwal = withReactContent(Swal);

const showEditSwal = (link, navigaPage, navigate, newFile, reload) => {
  const saveBtnClicked = () => {
    location.reload();
  };
  AddSwal.fire({
    title: "Faylni yangilashni xohlaysizmi?",
    text: "Bu amal faylni yangilaydi.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ha, yangilansin!",
    cancelButtonText: "Bekor qilish",
  }).then((result) => {
    if (result.isConfirmed) {
      // Show loading SweetAlert
      let timerInterval;
      Swal.fire({
        title: "Fayl yangilanmoqda...",
        html: "Iltimos kuting.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // API chaqiruvi orqali faylni qo'shish
      publicAxios
        .put(`${link}`, newFile)
        .then((data) => {
          Swal.fire({
            title: "Yangilandi!",
            text: "Fayl muvaffaqiyatli yangilandi.",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
          if (reload) saveBtnClicked();
          return { data };
        })
        .catch((error) => {
          console.log(error.message);
          Swal.fire("Xatolik", "Faylni qo'shishda xatolik yuz berdi.", "error");
          return { error };
        });
    }
  });
};

export default showEditSwal;
