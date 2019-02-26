import axios, { AxiosRequestConfig } from 'axios';

export interface HttpRequestConfig extends AxiosRequestConfig {
  [extraProps: string]: any;
}

export const http = axios;

export function setToken(token: string): void {
  axios.defaults.headers.common.token = token;
}

export const url: { [propName: string]: any } = {
  index: 'https://api.hawkeye.esportseyes.com/',
};
