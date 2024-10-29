import React from "react";
import Input from "../../components/Form/Input";
import UniversalBtn from "../../components/buttons/UniversalBtn";

const Payment = () => {
  return (
    <div className="container flex items-center justify-center px-[20px] mt-[20px] lg:mt-[50px] font-mono ">
      <form className="flex flex-col lg:gap-2 gap-1 border border-border max-w-[550px]  shadow-md rounded-[10px] lg:rounded-[20px] lg:p-[44px] px-[14px] py-[22px]">
        <h1 className="text-main lg:text-[30px] text-[25px] text-center">
          To'lash
        </h1>
        <p className="lg:text-[18px] text-[14px]">
          VIZA, MasterCard, China UnionPay, JCB, UZCARD, HUMO to’lov tizimlari
          kartalari bilan ishlash
        </p>
        <Input title={"Karta raqami"} />
        <div className="flex justify-between gap-4">
          <Input title={"MM"} />
          <Input title={"YY"} />
          <Input title={"CVV"} />
        </div>
        <Input title={"Karta egasining nomi"} />
        <Input title={"Email"} />
        <div className="flex flex-col justify-between mt-4 lg:mt-0 lg:flex-row lg:items-center">
          <div className="flex gap-2 text-[18px]">
            <h1>To'lov summasi: </h1>
            <p>200$</p>
          </div>
          <UniversalBtn text={"To'lash"} bg={"bg-main"} />
        </div>
      </form>
    </div>
  );
};

export default Payment;
