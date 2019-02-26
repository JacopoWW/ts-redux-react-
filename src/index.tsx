import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const rootElement: HTMLElement | null = document.getElementById('root');

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

if (rootElement && rootElement.hasChildNodes()) {
  ReactDOM.render(app, rootElement);
} else {
  ReactDOM.hydrate(app, rootElement);
}

registerServiceWorker();
