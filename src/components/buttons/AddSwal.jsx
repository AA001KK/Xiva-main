import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import publicAxios from "../../api";

const AddSwal = withReactContent(Swal);

const showAddSwal = (link, navigaPage, navigate, newFile, reload) => {
  const saveBtnClicked = () => {
    location.reload();
  };
  AddSwal.fire({
    title: "Fayl qo'shishni xohlaysizmi?",
    text: "Bu amal faylni qo'shadi.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ha, qo'shilsin!",
    cancelButtonText: "Bekor qilish",
  }).then((result) => {
    if (result.isConfirmed) {
      // Show loading SweetAlert
      let timerInterval;
      Swal.fire({
        title: "Fayl qo'shilmoqda...",
        html: "Iltimos kuting.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // API chaqiruvi orqali faylni qo'shish
      publicAxios
        .post(`${link}`, newFile)
        .then((data) => {
          Swal.fire({
            title: "Qo'shildi!",
            text: "Fayl muvaffaqiyatli qo'shildi.",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then(() => {
            navigate(`${navigaPage}`);
            if (reload) saveBtnClicked();
          });
        })
        .catch((error) => {
          console.log(error.message);
          Swal.fire("Xatolik", "Faylni qo'shishda xatolik yuz berdi.", "error");
        });
    }
  });
};

export default showAddSwal;
