import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => { this.setState({ albums: responseJson }); });
  }

  renderAlbums() {
    console.log(this.state.albums); // Remove this later
    return (
      this.state.albums.map(album => <AlbumDetail album={album} key={album.title} />)
    );
  }

  render() {
    const { albums } = this.state;

    if (!albums.length) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
