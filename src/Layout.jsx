import React, { useEffect } from "react";
import HeaderTop from "./components/Header/HeaderTop/HeaderTop";
import HeaderMenu from "./components/Header/HeaderMenu/HeaderMenu";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import ImgModal from "./components/Modals/ImgModal";
import HeaderLinks from "./components/Header/HeaderMenu/HeaderLinks";
import { ToastContainer, toast } from "react-toastify";
import i18n from "i18next";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const loaderRedux = useSelector((state) => state.hotels.loaderRedux);


  useEffect(() => {
    // Список доступных языков
    const availableLanguages = ["ru", "en", "de", "zh"];
    
    // Получаем язык из localStorage и обрезаем до первых двух символов
    let langValue = localStorage.getItem("i18nextLng");
    langValue = langValue ? langValue.slice(0, 2) : "ru"; // 'ru-RU' → 'ru'
    
    // Проверяем, доступен ли язык в списке
    if (!availableLanguages.includes(langValue)) {
      langValue = "ru"; // Устанавливаем язык по умолчанию, если язык недоступен
    }
  
    // Сохраняем обрезанное значение в localStorage
    localStorage.setItem("i18nextLng", langValue);
  
    // Устанавливаем язык в i18next
    i18n.changeLanguage("ru");
  }, []);
  

  return (
    <div className="relative flex flex-col h-screen">
      <HeaderTop />
      <ToastContainer position="top-center" closeButton={false} />
      <div className="mb-4 lg:mb-8">
        <HeaderMenu />
      </div>
      <div className="mx-auto md:hidden px-[10px] my-2 container">
        <HeaderLinks />
      </div>

      {loaderRedux && (
        <div className="relative flex-1">
          <Loader />
        </div>
      )}
      <Outlet />
      <ImgModal />
      <Footer />
    </div>
  );
};

export default Layout;
