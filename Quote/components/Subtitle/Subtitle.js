import React, { Component } from 'react'

import { View } from 'react-native';
import { Text } from '@shoutem/ui'

class Subtitle extends Component {
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
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.5,
                    marginHorizontal: 120
                }}></View>
                
                <Text style={{textAlign: 'center', marginVertical: 10}}>{this.props.subtitle}</Text>

            </View>
        )
    }
}

export default Subtitle;