import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from '../store';

const authSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const auth = (getState() as RootState).auth;
      const isLoggedIn = auth.isLoggedIn;
      const accessToken = auth.user?.accessToken;

      if (isLoggedIn) headers.set('authorization', `Bearer ${accessToken}`);

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default authSlice;
