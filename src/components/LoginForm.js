import React from 'react';

import { Text, View } from 'react-native';

import firebase from 'firebase';

import { Header, Card, CardSection, Button, Input, Spinner } from './common';


export default class LoginForm extends React.Component {

  //State
  state = { email: '', password: '', error: '', loading: false }

  //this functio working when user press on the login form
  onButtonPress = () => {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => { 
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  renderButton = () => {
    if(this.state.loading) {
      return <Spinner size="large"/>
    } else {
      return <Button onPress={this.onButtonPress}>Login</Button>
    }
  }

  //this function working when login faild
  onLoginFail = () => {
    this.setState({error: 'Authentcation faild.', loading: false})
  }

  //this function working when login success
  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  render () {
    return (
      <View>
        <Header title="Log in"/>
        <Card>
          
          <CardSection>
            <Input 
              label="Email" 
              placeholder="user@example.com"
              value={this.state.email}
              onChangeText={ email => this.setState({ email }) }
              secure={false}
            />
          </CardSection>

          <CardSection>
            <Input 
              label="Password" 
              placeholder="enter password"
              value={this.state.password}
              onChangeText={ password => this.setState({ password }) }
              secure={true}
            />
          </CardSection>

          <Text style={styles.errorMsgStyle}>{this.state.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
          
        </Card>
      </View>
    )
  }
}

const styles = {
  errorMsgStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
}