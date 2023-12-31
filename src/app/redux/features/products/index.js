import { seedProductList } from "@data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = seedProductList();

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
