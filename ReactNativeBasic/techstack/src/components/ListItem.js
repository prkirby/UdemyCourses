import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  NativeModules
} from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { expanded, item } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {item.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.item;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)} >
        <View style={{ flex: 1 }}>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

function mapStateToProps({ selectedLibraryId }, { item }) {
  const expanded = selectedLibraryId === item.id;
  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
