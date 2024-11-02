import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagination({ data, refresh }) {
  const [params, setParams] = useSearchParams();

  const { page, total_pages, items } = data;

  const clickPagination = (page) => {
    if (total_pages >= page && page > 0) {
      params.set("page", page);
      refresh(params.toString());
      setParams(params);
    }
  };

  return items?.length > 0 ? (
    <div className="flex justify-center items-center lg:py-8 py-2 gap-x-2">
      <span
        onClick={() => clickPagination(page - 1)}
        className={`bg-[#0002] px-3 py-1 text-lg rounded-md cursor-pointer ${
          page - 1 > 0 ? "opacity-1" : "opacity-50 cursor-no-drop"
        }`}
      >
        <i className="fa-solid fa-angle-left"></i>
      </span>
      {page > 1 && (
        <span
          onClick={() => clickPagination(page - 1)}
          className="bg-[#0002] px-3 py-1 text-lg rounded-md cursor-pointer"
        >
          {page - 1}
        </span>
      )}
      <span className="bg-main text-white px-3 py-1 text-lg rounded-md cursor-pointer">
        {page}
      </span>
      {page < total_pages && (
        <span
          onClick={() => clickPagination(page + 1)}
          className="bg-[#0002] px-3 py-1 text-lg rounded-md cursor-pointer"
        >
          {page + 1}
        </span>
      )}
      <span
        onClick={() => clickPagination(page + 1)}
        className={`bg-[#0002] px-3 py-1 text-lg rounded-md cursor-pointer ${
          page < total_pages ? "opacity-1" : "opacity-50 cursor-no-drop"
        }`}
      >
        <i className="fa-solid fa-angle-right"></i>
      </span>
    </div>
  ) : (
    <h1 className="text-center font-bold text-2xl py-6">
      Hech narsa topilmadi
    </h1>
  );
}
