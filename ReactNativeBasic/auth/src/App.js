import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyByxB-_OR3mtZ4u8iMw0tnpmtPh2JltprM',
      authDomain: 'auth-udemy-9faab.firebaseapp.com',
      databaseURL: 'https://auth-udemy-9faab.firebaseio.com',
      projectId: 'auth-udemy-9faab',
      storageBucket: 'auth-udemy-9faab.appspot.com',
      messagingSenderId: '1082931276532'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
