import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logout.fulfilled](state, _) {
      state.user = {
        name: "",
        email: "",
        password: "",
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;