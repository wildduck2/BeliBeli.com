import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";

export interface imgTypes {
  original: string;
  lowReseloution: string;
}

export type FiltedDataTypes = {
  id: string;
  img1: imgTypes;
  img2?: imgTypes | null;
  title: string;
  price: number;
  liked: boolean;
  discount: number | null;
  choosed?: boolean | null;
}[];

const useFetch = (dataName: string) => {
  const [fetchedData, setFetchedData] = useState<FiltedDataTypes>();

  // const store = useSelector((state: RootState) => state.data)

  const FetchData = async () => {
    const FETCHED_DATA = (await axios
      .get(`/src/json/trendingNow/${dataName}.json`)
      .then((res) => res.data.data)) as Awaited<Promise<FiltedDataTypes>>;

    setFetchedData(FETCHED_DATA);
  };
  useEffect(() => {
    FetchData();
  }, [dataName]);

  return fetchedData;
};

export default useFetch;
