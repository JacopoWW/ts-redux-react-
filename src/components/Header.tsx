import * as React from 'react';

export default class Header extends React.Component<IProps, object> {
  public render() {
    const { navList, navRight } = this.props;
    return (
      <header className="header">
        <div className="container">
          <nav className="d-flex justify-content-between">
            <ul className="nav">
              {navList.map(it => (
                <li className="nav-item" key={it.text}>
                  <a className="nav-link" href="">{it.text}</a>
                </li>
              ))}
            </ul>
            <div className="nav-r">
              <ul className="nav">
                {navRight.map(it => (
                  <li className="nav-item" key={it.text}><a href="" className="nav-link">{it.text}</a></li>
                ))}
              </ul>         
            </div>
          </nav>
        </div>
      </header>);
  }
}

export interface INavItem {
  text: string;
}

interface IProps {
  navList: INavItem[];
  navRight: INavItem[];
}
