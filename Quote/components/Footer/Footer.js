import React, { Component } from 'react'

import {
  View,
  TouchableOpacity
} from 'react-native';

import { Image, Title, Text } from '@shoutem/ui'

class Slogan extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
  
            <View>
                <View     
                    style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>

                    <Image
                    style={{
                        width: 60,
                        height: 60,
                        alignItems: 'center',
                        margin: 50
                    }}
                    source={require('../img/quote-icon.png')} 
                    ></Image>
                    <Title
                            style={{
                                color: '#8fe0d0',
                                fontSize: 25,
                                letterSpacing: 1,
                                fontWeight: 'bold'
                            }}>QUOTE</Title>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, paddingTop: 5, marginBottom: 25 }}>Copyright 2019 Rachel Nething.</Text>
                    </TouchableOpacity>
                        
                    </View>

            </View>
        )
    }
}

export default Slogan;