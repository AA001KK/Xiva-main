import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import publicAxios from "../../api";

const DeleteSwal = withReactContent(Swal);

const showDeleteSwal = (link, navigaPage, navigate, reload) => {
  const saveBtnClicked = () => {
    if (reload) {
      location.reload();
    }
  };
  DeleteSwal.fire({
    title: "Ishonchingiz komilmi?",
    text: "Bu amalni ortga qaytarib bo'lmaydi!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ha, o'chirilsin!",
    cancelButtonText: "Bekor qilish",
  }).then((result) => {
    if (result.isConfirmed) {
      // Show loading SweetAlert
      let timerInterval;
      Swal.fire({
        title: "Ma'lumotlar yangilanmoqda...",
        html: "Iltimos kuting.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // API chaqiruvi orqali faylni o'chirish
      publicAxios
        .delete(`${link}`)
        .then((data) => {
          Swal.fire({
            title: "O'chirildi!",
            text: "Hujjat muvaffaqiyatli o'chirildi.",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
              saveBtnClicked();
            },
          }).then(() => {
            navigate(`/admin/${navigaPage}`);
            saveBtnClicked();
          });
        })
        .catch((error) => {
          console.log(error.message);
          Swal.fire(
            "Xatolik",
            "Hujjatni o'chirishda xatolik yuz berdi.",
            "error"
          );
        });
    }
  });
};

export default showDeleteSwal;
