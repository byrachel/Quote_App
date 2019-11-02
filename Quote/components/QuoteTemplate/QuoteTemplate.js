import React, { Component } from 'react';

import {
  View
} from 'react-native';

import { ImageBackground, Title, Text, Divider } from '@shoutem/ui';

class QuoteTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',}}>
                
                <ImageBackground
                    style={{aspectRatio: 1, margin: 15}}
                    source={require('../img/background-square.png')}
                >
                    <Title style={{textAlign: 'center', margin: 25}}>Innover, c'est savoir abandonner des milliers de bonnes idées.</Title>
                    <Text>Steve Jobs</Text>
            
                </ImageBackground>

            </View>

            <View style={{marginHorizontal: 25}}>
                <Text style={{padding: 5}}>Auteur</Text>
                <Divider styleName="line" />
            </View>
            
        </View>
        )
    }
}

export default QuoteTemplate;