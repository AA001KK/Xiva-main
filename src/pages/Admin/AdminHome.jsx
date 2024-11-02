import React from "react";
import PageDesign from "./components/PageDesign";
import TitlePage from "./components/TitlePage";
import Client from "./Client";
import useFetch from "../../hooks/useFetch";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
const AdminHome = () => {
  const [searchParams, setParams] = useSearchParams();
  const defaultApi = "orders?";

  const { data, loading, refresh } = useFetch(
    `${defaultApi}${searchParams.toString()}`
  );

  

  const toggleCancelStatus = (id, newStatus) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, canceled: newStatus } : product
    );
    setProducts(updatedProducts);
  };

  return (
    !loading && (
      <PageDesign>
        <TitlePage title={"Mijozlar"} />
        <div className="relative flex flex-col">
          {data.items.map((order, idx) => {
            return  <Client order={order} key={idx} />;
          })}
        </div>
        <Pagination
          data={data}
          refresh={(query) => refresh(`${defaultApi}${query}`)}
        />
      </PageDesign>
    )
  );
};

export default AdminHome;
