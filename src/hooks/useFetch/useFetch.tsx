import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../context/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { supabase } from "../../supabase/supabase";

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
  const dispatch = useDispatch();

  const [fetchedData, setFetchedData] = useState<FiltedDataTypes>();

  // const store = useSelector((state: RootState) => state.data)

  const FetchData = async () => {
    const { data: banners, error } = await supabase.from("banners").select("*");
    console.log(banners[0]);
  };
  useEffect(() => {
    // FetchData();
  }, [dispatch]);

  return fetchedData;
};

export default useFetch;
