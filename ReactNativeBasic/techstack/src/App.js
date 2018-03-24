import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(Reducers)}>
      <View>
        <Header>Tech Stack</Header>
        <LibraryList />
      </View>
    </Provider>
  );
};


export default App;
