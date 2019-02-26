import { http, HttpRequestConfig, url } from './service';

function requestConfig(info: HttpRequestConfig): object {
  return {
    baseURL: info.url ? url[info.url] : url.index,
    data: info.data,
    headers: info.headers,
    method: info.method || 'get',
    params: info.params,
  };
}

export default function actionCreator(action: object): Function;
export default function actionCreator(
  action: string,
  path: string,
  info?: HttpRequestConfig,
  transfer?: Function,
): Function;
export default function actionCreator(
  action: string | object,
  path = '',
  config: HttpRequestConfig = { method: 'get', url: 'index' },
  transfer: Function = (res: any) => res,
): Function {
  return (dispatch: Function): void | Promise<any> => {
    if (typeof action === 'object') {
      // 本地状态走这个分支
      dispatch(action);
      return;
    } else {
      // 网络请求走这个分支
      const reqConfig: object = requestConfig(config);
      const reqStart: Function = () => ({ type: `REQUEST/${action}` });
      const reqSuccess: Function = (payload: object) => ({ type: `OK/${action}`, payload });
      const reqFail: Function = () => ({ type: `FAIL/${action}` });
      dispatch(reqStart());
      return http(path, reqConfig)
        .then((res) => transfer(res)) // 取出想要的数据，或者转换
        .then((data) => dispatch(reqSuccess(data)))
        .catch(() => dispatch(reqFail()));
    }
  };
}
