import React from 'react';

import {View} from 'react-native';

import firebase from 'firebase';

import {Spinner} from './src/components/common';

import LoginScreen from './src/screens/LoginScreen';

import AlbumsScreen from './src/screens/AlbumsScreen';


export default class App extends React.Component {

  state = {loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBtRY_yBq4P3Dv9Ezx3S3_yxgy6WRTNXiM",
      authDomain: "auth-82b66.firebaseapp.com",
      databaseURL: "https://auth-82b66.firebaseio.com",
      projectId: "auth-82b66",
      storageBucket: "auth-82b66.appspot.com",
      messagingSenderId: "587786628827"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }

    })
  }

  renderContent =() => {
    switch(this.state.loggedIn) {
      case true:
        return (
          <AlbumsScreen/>
        );
      case false: 
        return <LoginScreen/>;
      default:
        return <Spinner/>
      }
    }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderContent()}
      </View>
    );
  }
}

