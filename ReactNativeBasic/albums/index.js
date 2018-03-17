import { AppRegistry } from 'react-native';
import React from 'react';
import Header from './src/components/header';

const App = () => (
    <Header />
);

AppRegistry.registerComponent('albums', () => App);
