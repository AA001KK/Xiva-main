import React, { useState } from "react";
import Translator from "./Translator";
import { filterTranslator } from "../../constants";
import FilterCheckbox from "../../components/Header/FilterCheckbox";
import useFetch from "../../hooks/useFetch";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
import HotelBookingCalendar2 from "../../components/Hotel/Hotel";

const Translators = () => {
  const [searchParams, setParams] = useSearchParams();

  const { data, loading, refresh } = useFetch(
    `translators?${searchParams.toString()}`
  );
  const { items: translators } = data;

  const [query, setQuery] = useState(
    searchParams.get("languages")?.split("-") || []
  );

  const changeQuerys = (id) => {
    const result =
      query.findIndex((item) => item == id) > -1
        ? query.filter((i) => i != id)
        : [...query, id];
    setQuery(result);
    if (result.length > 0) {
      searchParams.set("languages", result.join("-"));
    } else {
      searchParams.delete("languages");
    }
    searchParams.set("page", 1);
    setParams(searchParams);
    refresh(`translators?${searchParams.toString()}`);
  };

  return (
    !loading && (
      <div className="container px-[10px] lg:px-0 mx-auto ">
        {/* <div className="mt-[20px]">
          <HotelBookingCalendar2 link={"/basket"} />
        </div> */}
        <FilterCheckbox
          query={query}
          setQuery={changeQuerys}
          filterItems={filterTranslator}
          classNameList={""}
        />
        {translators?.map((item, idx) => (
          <Translator key={idx}  translatorData={item} />
        ))}
        <Pagination
          data={data}
          refresh={(query) => refresh(`translators?${query}`)}
        />
      </div>
    )
  );
};

export default Translators;
