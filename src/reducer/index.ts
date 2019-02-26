import { combineReducers, ReducersMapObject } from 'redux';
import * as ACTIONS from '../actions/actionType';
import reducer from './reducer';

function reducerObject(): ReducersMapObject {
  const reducerMap = {};
  Object.values(ACTIONS).forEach((type) => {
    console.log(type);
    reducerMap[type] = reducer(type);
  });
  return reducerMap;
}

export default combineReducers(reducerObject());
