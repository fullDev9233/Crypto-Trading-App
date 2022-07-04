import http, { setHeaders } from './common';

export const getAll = async (url: string, token: string) => {
  try {
    const response = await http.get<any>(url, setHeaders(token));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const get = async (url: string, id: string, token: string) => {
  try {
    const response = await http.get<any>(`${url}/${id}`, setHeaders(token));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const post = async (url: string, data: any) => {
  try {
    const response = await http.post<any>(url, data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const update = async (url: string, id: string, data: any) => {
  try {
    const response = await http.put<any>(`${url}/${id}`, data, setHeaders(data.token));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const remove = async (url: string, id: any, token: string) => {
  try {
    const response = await http.delete<any>(`${url}/${id}`, setHeaders(token));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const removeAll = async (url: string, token: string) => {
  try {
    const response = await http.delete<any>(url, setHeaders(token));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const findByKey = (url: string, key: string) => {
  return http.get<any>(`${url}?${key}=${key}`);
};
