import store from '../store';
import actionCreate from './actionCreator';
import { TEST, TEST2 } from './actionType';
import { HttpRequestConfig } from './service';

export const actionStore: { [propName: string]: Function } = {
  [TEST]: (payload: any): Function => actionCreate({ type: TEST, payload }),
  [TEST2]: (): Function => actionCreate(TEST2, 'test'),
};

export const dispatcher = (action: string, info?: HttpRequestConfig): void => {
  store.dispatch(actionStore[action](info));
};
