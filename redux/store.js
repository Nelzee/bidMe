import { configureStore } from "@reduxjs/toolkit";
import bidsReducer from "./bidsSlice"; 

export default configureStore({
  reducer:{
    bids:bidsReducer,
  }
})