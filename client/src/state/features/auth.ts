import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type User = {
  _id: string;
  name: string;
  email: string;
  accessToken: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
};

const userJSONString = localStorage.getItem('user') ?? 'null';
const userData: User | null = JSON.parse(userJSONString);

const initialLoginState: AuthState = {
  isLoggedIn: !!userData,
  user: userData,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      if (action.payload?.accessToken) {
        state.isLoggedIn = true;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
        localStorage.setItem('accessToken', action.payload.accessToken);
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
