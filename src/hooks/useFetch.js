import { useEffect, useState } from "react";
import publicAxios from "../api/index";
import { useDispatch } from "react-redux";
import { fetchingData } from "../components/redux/slice/hotels_slice";

export default function useFetch(path) {
  const defaultData = [];
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const getData = async (p) => {
    setData(defaultData);
    setLoading(true);
    dispatch(fetchingData(true));
    try {
      const { data: fetched } = await publicAxios.get(`/${p || path}`);
      if(fetched) setData(fetched);
    } catch (error) {
      setError(error);
      const { status } = error.response;
    } finally {
      setLoading(false);
    dispatch(fetchingData(false));

    }
  };

  useEffect(() => {
    getData(path);
  }, []);

  return { data, setData, loading, setLoading, error, refresh: getData };
}
