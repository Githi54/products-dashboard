import { createSlice } from "@reduxjs/toolkit";

const chartTypeSlice = createSlice({
  name: "chartType",
  initialState: "bar",
  reducers: {
    changeChartType(state, { payload }) {
      state.chartType = payload;
    },
  },
});

export const { changeChartType } = chartTypeSlice.actions;

export default chartTypeSlice.reducer;
