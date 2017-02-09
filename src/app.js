import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBe2qZXnEUqDMfW2K635SNPvfOklh9PRDU',
    authDomain: 'authentication-71735.firebaseapp.com',
    databaseURL: 'https://authentication-71735.firebaseio.com',
    storageBucket: 'authentication-71735.appspot.com',
    messagingSenderId: '926415916363'
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
       <LoginForm />
      </View>
    );
  }
}

export default App;
