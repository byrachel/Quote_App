import React, { Component } from 'react'

import { View, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from '@shoutem/ui'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
            email:'',
            username:'',
            password:'',
            message:''
            }
        }
    }
    
    createAccount = (event) => {
        event.preventDefault();
    
        var data = {
            user: {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
        }
    
        var options = {
            method: 'POST',
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        }
    
        fetch('http://localhost:8080/users', options)
        .then((res) => (res.json()))
        .then(
            (result) => {
                this.setState({message: result.message});
            },
            (error) => {
                this.setState({message: "Oups. Tentez à nouveau."});
            }
        )
      }

    render() {

        return(
  
            <View style={{ marginVertical: 10 }}>
                <ImageBackground
                    style={{ width: '100%' }}
                    source={require('../img/background-square.png')} > 

                    <View style={{ marginVertical: 50, marginHorizontal: 25 }}>
                        <TextInput
                            style={{ margin: 5 }}
                            placeholder={'Nom d\'utilisateur'}
                            onChangeText={(text) => {this.setState({username:text})}} />

                        <TextInput
                            style={{ margin: 5 }}
                            placeholder={'e-Mail'}
                            onChangeText={(text) => {this.setState({email:text})}} />

                        <TextInput
                            style={{ margin: 5 }}
                            placeholder={'Mot de passe'}
                            secureTextEntry
                            onChangeText={(text) => {this.setState({password:text})}} />

                        <Text>{this.state.message}</Text>

                        <Button
                        styleName="secondary"
                        onPress={this.createAccount}
                        style={{ margin: 5 }}>
                            <Text style={{ fontSize: 16 }}>Créer un compte</Text>
                        </Button>
                        
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default Register;