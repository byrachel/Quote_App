import React, { Component } from 'react'

import Header from '../../../components/Header/Header'
import Subtitle from '../../../components/Subtitle/Subtitle'
import Add from '../../../components/Add/Add'

import {
  View,
  Image
} from 'react-native';

import { Icon, Title, Text } from '@shoutem/ui'

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static navigationOptions = {
        tabBarIcon: () => (
        <Image
            style={{
            width: 32,
            height: 32
        }}
        source={require('../../../components/img/add.png')} />
        ),
        tabBarOptions: {
            activeTintColor: '#8fe0d0',
            showLabel: false,
            marginTop: 5,
          }
    }

    render() {
        return(
            <View>
                <Header />
                <Subtitle subtitle="Quelle citation t'inspire aujourd'hui ?" />

                <Add />

                <View     
                    style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'grey',
                    margin: 20
                }}>

                    <Title>Fan de citation ?</Title>
                    <Title
                        style={{
                            fontWeight: 'bold',
                            color: '#8fe0d0'
                    }}>Inscris-toi, c'est gratuit.</Title>
                        
                </View>

            </View>

        )
    }
}

export default Quote;