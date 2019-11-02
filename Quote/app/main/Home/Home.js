import React, { Component } from 'react';

import Header from '../../../components/Header/Header';
import Register from '../../../components/Register/Register';
import Slogan from '../../../components/Slogan/Slogan';
import Footer from '../../../components/Footer/Footer';

import {
  View,
  Image,
  ScrollView,
  Text
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static navigationOptions = {
        tabBarIcon: () => (
        <Image
            style={{
            width: 28,
            height: 28
        }}
        source={require('../../../components/img/home.png')} />),
        tabBarOptions: {
            activeTintColor: '#8fe0d0',
            showLabel: false,
            marginTop: 5,
          }
    }

    render() {
        return(

        <View>
            <ScrollView>
                <Header />
                <Slogan />
                <Register />
                <Text
                    style={{ textAlign: 'center', padding: 20 }}
                    onPress={() => this.props.navigation.navigate('Profil')}>
                    Déjà un compte ? Se connecter.
                </Text>
                <Footer />
            </ScrollView>
        </View>
        )
    }
}

export default Home;