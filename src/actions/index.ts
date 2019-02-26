import actionCreate from './actionCreator';
import { TEST, TEST2 } from './actionType';
import { HttpRequestConfig } from './service';

export const actionStore: { [propName: string]: Function } = {
  [TEST]: (payload: any): Function => actionCreate({ type: TEST, payload }),
  [TEST2]: (): Function => actionCreate(TEST2, 'test'),
};

export const dispatcher = (dispatch: Function, action: string, info?: HttpRequestConfig): void => {
  dispatch(actionStore[action](info));
};
