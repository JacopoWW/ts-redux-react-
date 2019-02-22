import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from '../reducer';

const reducer = combineReducers({
  app,
});

const composeEnhancers = compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
