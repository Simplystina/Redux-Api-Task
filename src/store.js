import { configureStore } from '@reduxjs/toolkit';
import covidDataSlice from "../src/features/dataSlice"

export const store = configureStore({
    reducer: {
       covidData: covidDataSlice
    },
  });