import React, { Component } from 'react';

import {
  View,
  ImageBackground,
  Text,
  Animated
} from 'react-native';

class Splashscreen extends Component {

    constructor() {
        super();
        this.state = {
            opacity: new Animated.Value(0)
        };
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('App');
        }, 2500);
    };

    render() {

        return(
            <View 
                style={{
                flex: 1,
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ImageBackground source={require('../../components/img/background-big.png')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex:1}}>
                    <Text 
                        style={{
                            opacity: this.state.textOpacity,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 32,
                            letterSpacing: 2,
                            marginTop: 350
                            }}>
                        Welcome</Text>
                    <Animated.Image
                        onLoad={this.onLoad}

                        style={[
                            {
                                opacity: this.state.opacity,
                                width: 420,
                                height: 145,
                                marginTop: -80,
                                transform: [
                                    {
                                        scale: this.state.opacity.interpolate({
                                            inputRange: [0,1],
                                            outputRange: [0.85, 1],
                                        })
                                    }
                                ]
                            }
                        ]}
                        
                        source={require('../../components/img/quote-big.png')} 
                    >
                    </Animated.Image>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Splashscreen;