import { createSlice } from "@reduxjs/toolkit";
import { categories } from "@data";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: categories,
    reducers: {},
})

export default categoriesSlice.reducer