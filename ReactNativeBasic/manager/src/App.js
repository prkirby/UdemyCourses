import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import Reducers from './reducers';
import LoginForm from './components/LoginForm';

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

  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
