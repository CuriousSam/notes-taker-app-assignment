import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type User = {
  _id: string;
  name: string;
  email: string;
  accessToken: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
};

const initialLoginState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
