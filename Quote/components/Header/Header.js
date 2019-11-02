import React, { Component } from 'react'

import {
  Image,
  View
} from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
            }}>

                <Image
                    style={{
                        width: 180,
                        height: 59,
                    }}
                    source={require('../../components/img/quote-big.png')} 
                ></Image>

            </View>
        )
    }
}

export default Header;