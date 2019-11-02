import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './Home/Home';
import Quote from './Quote/Quote';
import Profil from './Profil/Profil';
import Flow from './Flow/Flow';

// Création du menu sous forme 'Tab' en footer
const MainTabNavigator = createAppContainer(
    createBottomTabNavigator({
    Home: Home,
    Flow: Flow,
    Quote: Quote,
    Profil: Profil,
    },
    {
    initialRouteName: 'Home'
    },
   )
)

class Main extends Component {

    render() {
        return(
            <MainTabNavigator />
        );
    }
}

export default Main;