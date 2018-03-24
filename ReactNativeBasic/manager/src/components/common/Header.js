import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ children }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    height: 60,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E2E2',
    shadowColor: '#47a4e2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    position: 'relative'
  }
};

export { Header };
