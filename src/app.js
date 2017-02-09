import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBe2qZXnEUqDMfW2K635SNPvfOklh9PRDU',
    authDomain: 'authentication-71735.firebaseapp.com',
    databaseURL: 'https://authentication-71735.firebaseio.com',
    storageBucket: 'authentication-71735.appspot.com',
    messagingSenderId: '926415916363'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent() {
      switch (this.state.loggedIn) {
        case true:
         return (
          <View style={{flexDirection: 'row'}}>
           <Button onPress={() => firebase.auth().signOut()}>
           Log Out
           </Button>
          </View>
     );

        case false:
         return <LoginForm />;

        default:
         return (
           <View style={{flexDirection: 'row'}}>
            <Spinner size="large" />
           </View>
       );
      }
  }



  render() {
    return (
      <View>
      <Header headerText="Authentication"/>
       {this.renderContent()}
      </View>
    );
  }
}

export default App;
