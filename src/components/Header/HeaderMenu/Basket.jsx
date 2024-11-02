import React from "react";
import BasketIcon from "/src/assets/header/headerMenu/basket.svg";
import BasketCount from "./BasketCount";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBasket } from "../../redux/slice/cart_slice";

const Basket = () => {
  const cart = useSelector(getBasket);
  return (
    <Link to={"/basket"}>
      <div className="relative cursor-pointer basket">
        <i className="fa-solid text-main text-[22px]  lg:text-[25px] fa-cart-shopping"></i>
        <BasketCount count={cart?.items?.length} />
      </div>
    </Link>
  );
};

export default Basket;
