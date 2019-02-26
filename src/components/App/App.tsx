import * as React from 'react';
import { Route, Switch } from 'react-router';
import Header, { INavItem } from '../Header';
import Home from '../Home';
import './App.scss';

const navList: INavItem[] = [
  { text: '主页' },
  { text: '比分' },
  { text: '赛程' },
  { text: '资料库' },
  { text: '下载库' },
];

const navRight: INavItem[] = [{ text: '登录' }, { text: '注册' }, { text: '中文' }];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header navList={navList} navRight={navRight} />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
