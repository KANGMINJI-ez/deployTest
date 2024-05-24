import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.loginId;
      state.pw = action.payload.loginPw;
    },
    logout: (state, action) => {
      localStorage.removeItem("login");
      state.isLogin = false;
    }
  }
});

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;