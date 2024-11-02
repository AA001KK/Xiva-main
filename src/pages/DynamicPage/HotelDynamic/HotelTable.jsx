import React from "react";
import MuchDescription from "../../../components/typography/MuchDescription";
import { useTranslation } from "react-i18next";

const HotelTable = () => {
  const { t } = useTranslation();
  return (
    <div className="border font-mono border-dashed border-grayLight md:rounded-[10px] rounded-[5px]">
      <table className="w-full text-[12px] md:text-[16px] font-mono ">
        <tr className="border-b border-collapse border-dashed rounded-sm border-grayLight">
          <td className=" border-r w-[20%] border-dashed border-grayLight   py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
            {t("hotels.table.tr.Checkin")}
          </td>
          <td className="flex py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
            {t("hotels.table.td.Checkin")}
          </td>
        </tr>
        <tr className="border-b border-collapse border-dashed border-grayLight">
          <td className=" border-r w-[20%] border-dashed border-grayLight   py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
            {t("hotels.table.tr.CheckOut")}

          </td>
          <td className="flex py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
            {t("hotels.table.td.CheckOut")}

          </td>
        </tr>
        <tr className="border-b border-collapse border-dashed border-grayLight">
          <td className=" border-r w-[20%] border-dashed border-grayLight   py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
            {t("hotels.table.tr.Cancellation")}
          </td>
          <td className="flex  py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
            <MuchDescription
              classList={"!text-[12px]  md:hidden  "}
              line={"line-clamp-2"}
              txt={"hotels.table.td.Cancellation"}
            />
            <span className="hidden md:block">
            {t("hotels.table.td.Cancellation")}
            </span>{" "}
          </td>
        </tr>
        <tr className="border-b border-collapse border-dashed border-grayLight">
          <td className=" border-r w-[20%] border-dashed border-grayLight   py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
          {t("hotels.table.tr.Pets")}
          </td>
          <td className="flex py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
          {t("hotels.table.td.Pets")}

          </td>
        </tr>
        <tr className="border-collapse border-dashed">
          <td className=" border-r w-[20%] border-dashed border-grayLight   py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
          {t("hotels.table.tr.Parties")}

          </td>
          <td className="flex py-[7px] px-[7px] md:px-[14px] md:py-[14px]">
          {t("hotels.table.td.Parties")}

          </td>
        </tr>
      </table>
    </div>
  );
};

export default HotelTable;
