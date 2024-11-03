import React from "react";
import PageDesign from "../Admin/components/PageDesign";
import TitlePage from "../Admin/components/TitlePage";
import Client from "../Admin/Client";
import useFetch from "../../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";

const OwnerClients = () => {
  const [searchParams, setParams] = useSearchParams();
  const defaultApi = "orders/hotels?";

  const { data, loading, refresh } = useFetch(
    `${defaultApi}${searchParams.toString()}`
  );
  return (
  !loading &&  <PageDesign>
      <TitlePage title={"Mijozlar"} />

      <div className="relative flex flex-col">
        {data?.items?.map((order) => {
          return <Client order={order} />;
        })}
      </div>
      <Pagination
        data={data}
        refresh={(query) => refresh(`${defaultApi}${query}`)}
      />
    </PageDesign>
  );
};

export default OwnerClients;
