import { post, update } from './service';
import { API_ENDPOINT } from '../config';

export const onSignUp = async (data: AuthProps) => {
  return await post(`${API_ENDPOINT}/register`, data);
};

export const onSignIn = async (data: AuthProps) => {
  return await post(`${API_ENDPOINT}/login`, data);
};

export const updateUser = async (data: UserProps, id: string) => {
  return await update(`${API_ENDPOINT}/users`, id, data);
};
