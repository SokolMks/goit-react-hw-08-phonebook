import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  usersSignUpAction,
  usersLoginAction,
  usersLogoutAction,
  usersfetchCurrentUserAction,
} from "./auth-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const url = "/users";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  usersSignUpAction,
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${url}/signup`, credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  usersLoginAction,
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${url}/login`, credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  usersLogoutAction,
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${url}/logout`);
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  usersfetchCurrentUserAction,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("there is no token");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(`${url}/current`);
      return data;
    } catch (error) {}
  }
);

export default { register, login, logout, fetchCurrentUser };
