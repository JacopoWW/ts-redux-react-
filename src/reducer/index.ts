import { combineReducers, ReducersMapObject } from 'redux';
import actionTypeMap, { IActionType } from '../actions/actionType';
import reducer from './reducer';

function reducerObject(actionType: IActionType): ReducersMapObject {
  const reducerObject = {};
  Object.values(actionType).forEach((type) => {
    reducerObject[type] = reducer(type);
  });
  return reducerObject;
}

export default combineReducers(reducerObject(actionTypeMap));
