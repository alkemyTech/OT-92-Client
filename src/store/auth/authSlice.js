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

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
