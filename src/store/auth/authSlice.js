import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  user: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.isLogged = true;
      state.user = { ...action.payload.user };
      state.token = { ...action.payload.token };
    },
    login: (state, action) => {
      state.isLogged = true;
      state.user = { ...action.payload.user };
      state.token = { ...action.payload.token };
    },
    logout: state => {
      state.user = initialState;
    },
  },
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;
