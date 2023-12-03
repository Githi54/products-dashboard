import { createSlice } from "@reduxjs/toolkit";

const chartTypeSlice = createSlice({
  name: "chartType",
  initialState: "bar",
  reducers: {
    changeChartType(state, action) {
      state = action.payload;

      return state;
    },
  },
});

export const { changeChartType } = chartTypeSlice.actions;

export default chartTypeSlice.reducer;
