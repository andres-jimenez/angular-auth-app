import { User } from './user.interfaces';

export enum AuthStatus {
  checking = 'checking',
  authenticated = 'authenticated',
  notAuthenticated = 'notAuthenticated',
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface CheckTokenResponse {
  user: User;
  token: string;
}
