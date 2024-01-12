import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { UserRegisterData } from '../../validations/users';
import { RegisterRes } from './apiSlice.types';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const auth = (getState() as RootState).auth;
      const isLoggedIn = auth.isLoggedIn;
      const accessToken = auth.user?.accessToken;

      if (isLoggedIn) headers.set('authorization', `Bearer ${accessToken}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterRes, UserRegisterData>({
      query: (payload) => ({ url: '/users/register', body: payload, method: 'POST' }),
    }),
  }),
});

export default apiSlice;

export const { useRegisterMutation } = apiSlice;
