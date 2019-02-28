import axios, { AxiosRequestConfig } from 'axios';

export interface HttpRequestConfig extends AxiosRequestConfig {
  [extraProps: string]: any;
}

// interface socketConfig {
//   url: string;
//   open: ((this: WebSocket, ev: Event) => any) | null;
//   close: ((this: WebSocket, ev: CloseEvent) => any) | null;
//   error: ((this: WebSocket, ev: Event) => any) | null;
//   message: ((this: WebSocket, ev: MessageEvent) => any) | null;
// }

// function websocket(config: socketConfig) {
//   const ws = new WebSocket(config.url);
//   ws.onopen = config.open;
//   // ws.onmessage = config.close;
// }

export const http = axios;

export function setToken(token: string): void {
  axios.defaults.headers.common.token = token;
}

export const url: { [propName: string]: any } = {
  index: 'https://api.hawkeye.esportseyes.com/',
};
