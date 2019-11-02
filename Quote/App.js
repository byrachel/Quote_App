/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView
} from 'react-native';

// import du module de navigation
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import de l'écran de démarrage de l'application
import Splashscreen from './app/Splashscreen/Splashscreen';
import Main from './app/main/Main';

// Fonction qui crée le container de l'application = le navigateur qui va afficher les vues.
const AppContainer = createAppContainer (
  createSwitchNavigator({
    Loading: Splashscreen,
    App: Main
  }, {
    initialRouteName: 'Loading'
  })
);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
    </SafeAreaView>
  );
};

}

export default App;
