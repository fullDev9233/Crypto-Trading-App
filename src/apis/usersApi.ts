import { update } from './service';
import { API_ENDPOINT } from '../config';

// export const getUsers = async () => {
//   return await getAll(`${API_ENDPOINT}/users`);
// };

export const updateUser = async (data: any, id: string) => {
  return await update(`${API_ENDPOINT}/users`, id, data);
};

// export const deleteUser = async (id: string) => {
//   return await remove(`${API_ENDPOINT}/users`, id);
// };
