import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCM5q0hMpjyQ6fbqH1c83KlkIJJ8l6cSfM',
      authDomain: 'manager-udemy-14978.firebaseapp.com',
      databaseURL: 'https://manager-udemy-14978.firebaseio.com',
      projectId: 'manager-udemy-14978',
      storageBucket: 'manager-udemy-14978.appspot.com',
      messagingSenderId: '217419758025'
    };

    firebase.initializeApp(config);
  }

  store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

  render() {
    return (
      <Provider store={this.store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
