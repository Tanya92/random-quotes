import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import {quotesReducer} from './reducer';
import RandomQuote from './random-quote';

const store = createStore(quotesReducer, applyMiddleware(thunk));



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RandomQuote/>
      </Provider>
    );
  }
}
render(<App />, document.getElementById('root'));
