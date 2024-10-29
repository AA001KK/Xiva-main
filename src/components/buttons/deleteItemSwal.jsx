import Swal from "sweetalert2";
import { deleteCartItem } from "../redux/slice/cart_slice";

const DeleteItemSwal = (id, dispatch) => {
  console.log(id);

  Swal.fire({
    title: "Ishonchingiz komilmi?",
    text: "Bu amalni qaytarib bo'lmaydi!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ha, o'chirish!",
    cancelButtonText: "Bekor qilish",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deleteCartItem(id)); // Amaliyotni bajarish uchun action chaqirish
      Swal.fire("O'chirildi!", "Ma'lumot savatdan o'chirildi.", "success");
    }
  });
};

export default DeleteItemSwal;
