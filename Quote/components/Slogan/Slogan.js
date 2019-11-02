import React, { Component } from 'react'

import Subtitle from '../Subtitle/Subtitle'

import {
  View,
  ImageBackground
} from 'react-native';

import { Icon, Heading, Image, Title } from '@shoutem/ui'

class Slogan extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
  
            <View>
                <ImageBackground
                    style={{
                        width: '100%',
                        height: 625
                    }}
                    source={require('../img/right.png')} 
                >
                    <Subtitle subtitle='Pour les fans de citations' />

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
                            marginTop: 100
                        }}
                        source={require('../img/quote-black.png')} 
                        ></Image>
                        <Heading
                            style={{
                                textAlign: 'center',
                                margin: 50,
                                fontSize: 30,
                                lineHeight: 36
                            }}>
                            Découvre, crée, archive & partage tes <Heading style={{fontWeight: 'bold', fontSize: 33}}>citations</Heading> préférées.
                        </Heading>

                        <Icon
                            style={{
                                margin: 50,
                                color: '#8fe0d0'
                            }}
                            name="down-arrow" >
                        </Icon>

                        <Title>
                            Ta dose d'inspiration quotidienne.</Title>
                        <Title
                            style={{
                                padding: 10,
                                color: '#8fe0d0',
                                fontWeight: 'bold',
                                fontSize: 25
                            }}
                            >Inscris-toi, c'est gratuit.</Title>
                        
                    </View>
               </ImageBackground>
            </View>
        )
    }
}

export default Slogan;