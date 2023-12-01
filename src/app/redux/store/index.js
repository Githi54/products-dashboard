import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '@app/redux/features/products'
import categoriesReducer from '@app/redux/features/categories'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer
    },
})
