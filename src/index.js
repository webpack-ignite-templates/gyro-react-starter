require("react-hot-loader/patch");

import './assets/scss/foundation.scss';
import './assets/scss/layout.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/containers/App';
import {Provider} from 'react-redux';
import store from './js/store';

let render;

if(process.env.NODE_ENV !== 'production') {
  const AppContainer =  require('react-hot-loader').AppContainer;
  render = Component => {
    window.console.log(store);
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      document.getElementById('react-root')
    )
  };

  if (module.hot) {
    module.hot.accept('./js/containers/App', () => {
      try{
        render(App);
      } catch(err) {
        window.console.log(err);
      }
    })
  }

} else {
  
  render = Component => {
    ReactDOM.render(
        <Provider store={store}>
          <Component />
        </Provider>,
      document.getElementById('react-root')
    )
  };
  
}

render(App);


