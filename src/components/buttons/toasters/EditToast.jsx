import { toast } from "react-toastify";
import publicAxios from "../../../api";

const editToast = async (link, navigaPage, navigate, newFile, reload, txt) => {
  const toastId = toast.loading("Iltimos, kuting...");
  try {
    const { data } = await publicAxios.put(`${link}`, newFile);
    toast.update(toastId, {
      render: data.ok,
      type: "success",
      isLoading: false,
      autoClose: 3000, // 3  soniyadan keyin yopiladi
    });
    return { data, error: false };
  } catch (error) {
    toast.update(toastId, {
      render: "Xato sodir bo‘ldi!",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    return { error: true };
  }
};
export default editToast;
