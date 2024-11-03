import React from "react";
import { Link, useNavigate } from "react-router-dom";
import publicAxios from "../../../api";
import showDeleteSwal from "../../../components/buttons/DeleteSwal";
import showAddSwal from "../../../components/buttons/AddSwal";
import showErrorAlert from "../../../components/buttons/ErrorSweat";
import showEditSwal from "../../../components/buttons/EditSwal";

const TitlePage = ({
  title,
  link,
  navigaPage,
  add,
  edit,
  del,
  formFull,
  save,
  classNameList,
  data,
  images,
  oldImages,
  single,
  reload,
}) => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    showDeleteSwal(link, navigaPage, navigate);
  };

  const handleAddClick = () => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    if (images.length > 1) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    } else {
      formData.append("images", images);
    }

    if (formData) {
      if (formFull) {
        console.log(images);

        return showAddSwal(link, navigaPage, navigate, formData, reload);
      } else {
        showErrorAlert("Ma'lumot to'liq emas");
      }
    }
  };
  const updateItem = () => {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify(single ? data : { ...data, images: oldImages })
    );

    if (images.length > 1) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    } else {
      formData.append("images", images[0]);
    }

    if (formData) {
      return showEditSwal(link, navigaPage, navigate, formData, reload);
    } else {
      showErrorAlert("Ma'lumot to'liq emas");
    }
  };

  return (
    <div
      className={`my-[10px] px-[10px]  md:flex justify-between items-center border-dashed border-b  rounded-tl-[10px] rounded-tr-[10px]  lg:text-[20px] text-[16px]   lg:px-[30px] pb-[10px] ${classNameList}`}
    >
      <div className="">{title}</div>
      <div className="flex justify-between gap-[20px]">
        {del && (
          <button
            onClick={() => handleDeleteClick()}
            className="rounded-[12px] font-normal text-white bg-[#F72B50] flex "
          >
            <div className="p-[10px] px-[40px] border-r border-white ">
              O'chirish
            </div>
            <div className="p-[10px] rotate-[45deg] px-[20px]">
              <i className="fa-solid fa-plus"></i>
            </div>
          </button>
        )}
        {edit && (
          <button
            onClick={updateItem}
            className="rounded-[12px] font-normal text-white bg-[#FFA755] flex "
          >
            <div className="p-[10px] px-[40px] border-r border-white ">
              Tahrirlash
            </div>
            <div className="p-[10px] px-[20px]">
              <i className="fa-solid fa-pencil"></i>
            </div>
          </button>
        )}

        {add && (
          <Link to={link}>
            <button
              onClick={handleAddClick}
              className="rounded-[12px] font-normal text-white bg-[#4CAF50] flex "
            >
              <div className="p-[10px] px-[40px] border-r border-white ">
                Qo'shish
              </div>
              <div className="p-[10px] px-[20px]">
                <i className="fa-solid fa-plus"></i>
              </div>
            </button>
          </Link>
        )}
        {save && (
          <button
            onClick={handleAddClick}
            disabled={!formFull}
            className={`rounded-[12px] font-normal text-white flex ${
              !formFull
                ? "bg-[#B0BEC5] cursor-not-allowed"
                : "bg-[#007BFF] hover:bg-[#0056b3]"
            } transition-colors`}
          >
            <div className="p-[10px] px-[40px] border-r border-white">
              Saqlash
            </div>
            <div className="p-[10px] px-[20px]">
              <i className="fa-solid fa-save"></i>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default TitlePage;
