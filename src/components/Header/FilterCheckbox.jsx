import React, { useState } from "react";
import FilterLang from "../../pages/Translators/FilterLang";

const FilterCheckbox = ({ setQuery, query, filterItems, classNameList }) => {
  return (
    <div
      className={`my-[20px] grid grid-cols-3 md:flex flex-wrap justify-between gap-[10px] items-stretch lg:gap-[20px] container mx-auto ${classNameList}`}
    >
      {filterItems.map((langData, idx) => (
        <FilterLang
          key={idx}
          id={idx + 1}
          langData={langData}
          activeQuery={query}
          setActiveQuery={setQuery}
        />
      ))}
    </div>
  );
};

export default FilterCheckbox;
