import { configureStore } from "@reduxjs/toolkit";

import currenciesReducer from "../stateReducers/currenciesSlice.js";
import selectedCurrenciesReducer from "../stateReducers/selectedCurrencies.js";
import authReducer from "../stateReducers/authSlice.js";


// STORE CONTAINING ALL THE GLOBAL STATES
export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    selectedCurrencies: selectedCurrenciesReducer,
    auth: authReducer
  }
})