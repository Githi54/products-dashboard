import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@app/redux/features/products";
import categoriesReducer from "@app/redux/features/categories";
import chartTypeReducer from "@app/redux/features/chart-type";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    chartType: chartTypeReducer,
  },
});
