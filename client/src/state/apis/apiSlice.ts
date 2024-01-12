import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { UserLoginData, UserRegisterData } from '../../validations/users';
import {
  AddNoteResponse,
  AuthResponse,
  NoteListResponse,
  NoteRes,
} from './apiSlice.types';
import { CreateNotesData } from '../../validations/notes';

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
  tagTypes: ['NoteList', 'Note'],
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, UserRegisterData>({
      query: (payload) => ({
        url: '/users/register',
        body: payload,
        method: 'POST',
      }),
    }),
    login: builder.mutation<AuthResponse, UserLoginData>({
      query: (payload) => ({
        url: '/users/login',
        body: payload,
        method: 'POST',
      }),
    }),
    addNote: builder.mutation<AddNoteResponse, CreateNotesData>({
      query: (payload) => ({
        url: '/notes',
        body: payload,
        method: 'POST',
      }),
      invalidatesTags: ['NoteList'],
    }),
    notes: builder.query<NoteListResponse, void>({
      query: () => '/notes',
      providesTags: ['NoteList'],
    }),
    note: builder.query<NoteRes, string>({
      query: (noteId) => `/notes/${noteId}`,
      providesTags: ['Note'],
    }),
  }),
});

export default apiSlice;

export const {
  useRegisterMutation,
  useLoginMutation,
  useAddNoteMutation,
  useNotesQuery,
  useNoteQuery,
} = apiSlice;
