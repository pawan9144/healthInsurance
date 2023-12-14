import { HttpMethods } from '../constants/common.constant';
import { getCookie } from '../utils/utils';
import { AppConfig } from '../utils/AppConfig';
import { IMethod } from '../interfaces/api.interface';
import { Requests } from '../interfaces/common.interface';


export const queryOf = (params: Record<string, string> = {}): string => {
  return new URLSearchParams(params).toString();
};
export const isJson = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
const callApi = async <T, K>(
  method: IMethod,
  url: string,
  payload: K | null,
  req: Requests | null
): Promise<T> => {
  let baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const api = `${baseURL}${url}`;
  const headers: { [x: string]: string } = {
    'Content-Type': 'application/json',
  };
  const token = getCookie(AppConfig.tokenKey, req);
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const options: RequestInit = {
    method: method || HttpMethods.GET,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };
  if (
    [HttpMethods.POST, HttpMethods.PUT, HttpMethods.PATCH].includes(
      method as HttpMethods
    )
  ) {
    options.body = JSON.stringify(payload ?? {});
  }
  const response: Response = await fetch(api, options);
  if (!response?.ok) {
    const text = await response.text();
    return (JSON.parse(text) ?? text) as T;
  }
  return response.json();
};
export const apiService = {
  get: <T, K = {}>(
    url: string,
    req?: Requests
  ) => callApi<T, K>('GET', url, null, req ?? null),

  post: <T, K>(
    url: string,
    payload: K,
    req?: Requests
  ) => callApi<T, K>('POST', url, payload, req ?? null),

  patch: <T, K = Record<string, string | number>>(
    url: string,
    payload: K,
    req?: Requests
  ) => callApi<T, K>('PATCH', url, payload, req ?? null),

  put: <T, K = Record<string, string | number>>(
    url: string,
    payload: K,
    req?: Requests
  ) => callApi<T, K>(HttpMethods.PUT, url, payload, req ?? null),

  delete: <T, K = {}>(url: string) =>
    callApi<T, K>(HttpMethods.DELETE, url, null, null),
};
