import { User } from '../features/auth';

export type ApiRes = {
  success: boolean;
  statusCode: number;
};

export type AuthResponse = ApiRes & {
  user: User;
};
