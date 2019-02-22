import { AnyAction } from 'redux';
import { completeData } from '../utils';

interface IState {
  loading: boolean;
  wrong: boolean;
  [propName: string]: any;
}

export default function(type: string): Function {
  return (state: IState = { loading: true, wrong: false }, action: AnyAction) => {
    switch (action.type) {
      case `REQUEST/${type}`:
        return {
          ...state,
          loading: true,
          data: action.defaultDate,
        };
      case `OK/${type}`:
        return {
          ...state,
          loading: false,
          data: completeData(action.data, action.defaultData),
        };
      case `FAIL/${type}`:
        return {
          ...state,
          loading: true,
          wrong: true,
        };
      default:
        // 本地事件直接把 state 改为 payload
        return {
          ...state,
          payload: action.payload,
        };
    }
  };
}
