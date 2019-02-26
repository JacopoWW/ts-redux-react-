import * as React from 'react';
import { connect } from 'react-redux';
import { dispatcher } from '../actions';
import { TEST, TEST2 } from '../actions/actionType';

export interface HomeProps {
  getTest: Function;
  getTest2: Function;
  test: object;
  test2: object;
}

class Home extends React.Component<HomeProps, any> {
  public componentDidMount() {
    this.props.getTest2();
  }
  public render() {
    return <div>这里是内容</div>;
  }
}

const mapState2Props = (state: any) => {
  return {
    test: state.app[TEST],
    test2: state.app[TEST2],
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    getTest: () => dispatcher(dispatch, TEST),
    getTest2: () => dispatcher(dispatch, TEST2),
  };
};

export default connect(
  mapState2Props,
  mapDispatch,
)(Home);
