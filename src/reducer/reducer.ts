import { AnyAction } from 'redux';
import { DefaultData } from '../model';
import { completeData } from '../utils';

interface IState {
  loading: boolean;
  wrong: boolean;
  [extraProps: string]: any;
}

export default function(type: string): Function {
  console.log(DefaultData);
  return (state: IState = { loading: false, wrong: false }, action: AnyAction) => {
    switch (action.type) {
      case `REQUEST/${type}`:
        return {
          ...state,
          loading: true,
          payload: DefaultData[type],
        };
      case `OK/${type}`:
        return {
          ...state,
          loading: false,
          payload: completeData(action.data, DefaultData[type]),
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
          payload: action.payload || DefaultData[type],
        };
    }
  };
}
