import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
