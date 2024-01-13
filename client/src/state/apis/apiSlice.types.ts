import { User } from '../features/auth';

export type ApiRes = {
  success: boolean;
  statusCode: number;
  message?: string;
};

export type AuthResponse = ApiRes & {
  user: User;
};

export type Note = {
  user: string;
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type AddNoteResponse = ApiRes & {
  message: string;
  note: Note;
};

export type NoteListResponse = ApiRes & {
  totalResults: number;
  notes: Note[];
};

export type NoteResponse = ApiRes & { note: Note };

export type UpdateNotePayload = {
  _id: string;
  title?: string;
  description?: string;
};

export type UpdateNoteResponse = ApiRes & {
  message: string;
  note: Note;
};

export type DeleNoteResponse = ApiRes & {
  message: string;
  note: Note;
};
