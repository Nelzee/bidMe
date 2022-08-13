import { configureStore } from "@reduxjs/toolkit";
import bidsReducer from "./bidsSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    bids: bidsReducer,
    user: userReducer,
  },
});
