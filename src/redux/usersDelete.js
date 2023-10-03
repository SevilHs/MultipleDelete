import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/users",
});

export const deleteUsers = createAsyncThunk("deleteUsers", async (ids) => {
  await Promise.all([
    ids.forEach((id) => {
      axiosInstance.delete(`/${id}`);
    }),
  ]);
  console.log(ids);
  //   return ids
});

export const usersDeleteSlice = createSlice({
  name: "usersDelete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default usersDeleteSlice.reducer;
