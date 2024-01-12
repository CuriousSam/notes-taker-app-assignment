import { User } from '../features/auth';

export type ApiRes = {
  success: boolean;
  statusCode: number;
};

export type AuthResponse = ApiRes & {
  user: User;
};

interface Note {
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
