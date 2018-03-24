import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem({ item }) {
    return <ListItem item={item} />;
  }

  render() {
    return (
        <FlatList
          data={this.props.libraries}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
    );
  }
}

function mapStateToProps({ libraries }) {
  return { libraries };
}

export default connect(mapStateToProps)(LibraryList);
