import React from 'react';

import {ScrollView, View} from 'react-native';

import axios from 'axios';

import AlbumDetail from './AlbumDetail';

import {Header, Button, Card, CardSection} from './common'

import firebase from 'firebase';

class AlbumList extends React.Component {
  state = { albums: [] }

  componentWillMount() {

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({albums: res.data}));
      
  }

  renderAlbums = () => {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} data={album}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <Header title="Albums"/>
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>

          <CardSection>
            <Button onPress={() => firebase.auth().signOut()} color="red">Log Out</Button>
          </CardSection>
        
      </View>
    );
  }

}

export default AlbumList;