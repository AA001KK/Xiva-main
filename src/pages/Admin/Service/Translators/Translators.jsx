import React from "react";
import { Link } from "react-router-dom";
import TranslatorAdmin from "./Translator";
import TitlePage from "../../components/TitlePage";
import PageDesign from "../../components/PageDesign";
import useFetch from "../../../../hooks/useFetch";

const TranslatorsAdmin = () => {
  const { data, loading } = useFetch("translators?limit=100");
  const { items: translators } = data;
  return (
    <PageDesign>
      <TitlePage add title={"Mavjud Tarjimonlar"} link={"add"} />
      <div className=" md:grid grid-cols-4   md:gap-[50px] gap-[20px] flex  md:px-[30px] px-[10px] md:my-[50px] my-[20px]  flex-wrap">
        {!loading &&
          translators?.map((item) => <TranslatorAdmin translatorData={item} />)}
      </div>
    </PageDesign>
  );
};

export default TranslatorsAdmin;
