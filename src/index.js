import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/style.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Login from './Components/Login/Login';

const store = configureStore()
ReactDOM.render( <Provider store={store}>
    <Router>

      <App/>
     
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
