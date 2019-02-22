import actionCreate from './actionCreator';
import act from './actionType';


const actionStore: { [propName: string]: Function } = {
  [act.test]: (payload: any) => actionCreate({ type: act.test, payload }),
};

export default actionStore;
