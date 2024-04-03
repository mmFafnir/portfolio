import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { TWork } from "../../../types/work";

const defaultUrl =
  "https://6493705c428c3d2035d1c561.mockapi.io/pizza-api/works";

interface IParamsFetch {
  id?: string;
}

export const fetchWorks = createAsyncThunk<TWork[], IParamsFetch>(
  "works/fetchWorks",
  async ({ id }) => {
    let url = defaultUrl;

    if (id) {
      url = url + "?id=" + id;
    }
    const data = await axios.get(url);
    console.log(url);
    return data.data;
  }
);

export const postWork = createAsyncThunk(
  "works/postWork",
  async (item: TWork) => {
    const { data } = await axios.post(defaultUrl, item);
    return data;
  }
);
