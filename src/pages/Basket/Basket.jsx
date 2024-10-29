import React from "react";
import Cart from "../../components/Cart/cart";
import { Link } from "react-router-dom";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { getBasket } from "../../components/redux/slice/cart_slice";
import { useSelector } from "react-redux";
import showAddSwal from "../../components/buttons/AddSwal";
import publicAxios from "../../api";
import Swal from "sweetalert2";
export default function Pay() {
  const cart = useSelector(getBasket);

  const itemsInCart = [
    { id: 1, name: "Отель", date: { start: "10-18-2024", end: "10-26-2024" } },
    { id: 2, name: "Машина", date: { start: "10-20-2024", end: "10-24-2024" } },
    {
      id: 3,
      name: "Переводчик",
      date: { start: "10-22-2024", end: "10-23-2024" },
    },
  ];

  const handleConfirmBooking = () => {
    console.log(localStorage.getItem("acsess-token"));

    if (!localStorage.getItem("acsess-token")) {
      Swal.fire({
        title: "Требуется вход в аккаунт",
        text: "Чтобы подтвердить бронирование, пожалуйста, войдите в свой аккаунт.",
        icon: "warning",
        confirmButtonText: "Войти",
      }).then((result) => {
        if (result.isConfirmed) {
          // Если пользователь подтвердил, перенаправляем на страницу входа
          window.location.href = "/login"; // Редирект на страницу входа
        }
      });
    } else {
      // Проверка на наличие дат
      const itemsWithoutDate = cart.items.filter(
        (item) => !item.date.start || !item.date.end
      );

      const itemsWithoutDaysQuantity = cart.items.map((item) => {
        const newItem = { ...item }; // создаем копию объекта, чтобы избежать изменения исходного
        delete newItem.days_quantity; // удаляем свойство days_quantity
        return newItem;
      });

      if (itemsWithoutDate.length > 0) {
        Swal.fire({
          icon: "warning",
          title: "Дата не выбрана",
          text: "Пожалуйста, выберите диапазон дат для всех объектов в корзине.",
        });
      } else {
        // Показать индикатор загрузки
        Swal.fire({
          title: "Ожидание...",
          text: "Ваше бронирование обрабатывается, пожалуйста, подождите.",
          icon: "info",
          allowOutsideClick: false,
          showConfirmButton: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          }
        });
      
        // Даты выбраны, отправляем запрос на API с помощью Axios
        publicAxios
          .post("orders/order", { items: itemsWithoutDaysQuantity })
          .then((data) => {
            // Закрываем индикатор загрузки
            Swal.close();
      
            // Показать сообщение об успешном бронировании
            Swal.fire({
              title: "Успешно!",
              text: "Ваше бронирование подтверждено.",
              icon: "success",
              timer: 2000,
              timerProgressBar: true,
            });
          })
          .catch((error) => {
            // Закрываем индикатор загрузки, если произошла ошибка
            Swal.close();
      
            console.log(error.message);
            Swal.fire(
              "Ошибка",
              "Не удалось подтвердить бронирование.",
              "error"
            );
          });
      }
      
    }
  };

  return !cart || cart.items.length > 0 ? (
    <div className="container px-[10px] lg:px-0 py-4 mx-auto font-mono">
      <Cart />
      <div className="flex flex-col items-end">
        <h1 className="mb-3 text-xl">
          Umumiy: <b className="text-2xl text-main">{cart.total_price}$</b>
        </h1>
        {/* <Link to={"/pay"}>
        
          <UniversalBtn bg={"bg-main"} text={"Tasdiqlash"} />
        </Link> */}
        <div onClick={handleConfirmBooking}>
          <UniversalBtn bg={"bg-main"} text={"Tasdiqlash"} />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-[50vh]">
      <h1 className="text-xl">Hozircha savat bo'sh</h1>
    </div>
  );
}
