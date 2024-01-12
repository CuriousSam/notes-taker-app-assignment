import { User } from '../features/auth';

export type ApiRes = {
  success: boolean;
  statusCode: number;
};

export type AuthResponse = ApiRes & {
  user: User;
};

export interface Note {
  user: string;
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type AddNoteResponse = ApiRes & {
  message: string;
  note: Note;
};

export type NoteListResponse = ApiRes & {
  totalResults: number;
  page: number;
  pageSize: number;
  notes: Note[];
};
