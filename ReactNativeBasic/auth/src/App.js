import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyByxB-_OR3mtZ4u8iMw0tnpmtPh2JltprM',
      authDomain: 'auth-udemy-9faab.firebaseapp.com',
      databaseURL: 'https://auth-udemy-9faab.firebaseio.com',
      projectId: 'auth-udemy-9faab',
      storageBucket: 'auth-udemy-9faab.appspot.com',
      messagingSenderId: '1082931276532'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
