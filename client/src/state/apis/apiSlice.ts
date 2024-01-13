import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateNotesData } from '../../validations/notes';
import { UserLoginData, UserRegisterData } from '../../validations/users';
import { RootState } from '../store';
import {
  AddNoteResponse,
  AuthResponse,
  DeleNoteResponse,
  NoteListResponse,
  NoteResponse,
  UpdateNotePayload,
  UpdateNoteResponse,
} from './apiSlice.types';

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
    note: builder.query<NoteResponse, string>({
      query: (noteId) => `/notes/${noteId}`,
      providesTags: ['Note'],
    }),
    updateNote: builder.mutation<UpdateNoteResponse, UpdateNotePayload>({
      query: (payload) => ({
        url: `/notes/${payload._id}`,
        body: payload,
        method: 'PUT',
      }),
      invalidatesTags: ['NoteList'],
    }),
    deleteNote: builder.mutation<DeleNoteResponse, string>({
      query: (noteId) => ({
        url: `/notes/${noteId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['NoteList'],
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
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = apiSlice;
