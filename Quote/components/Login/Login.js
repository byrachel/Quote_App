import React, { Component } from 'react'

import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, Button, TextInput, Title } from '@shoutem/ui';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
            email: '',
            password: '',
            },
            message: ''
        }
    }
  _inputEmail = (event) => {
    this.setState({email: event.target.value});
  }
  
  _inputPassword = (event) => {
    this.setState({password: event.target.value});
  }

  _checkLogin = (e) => {

    e.preventDefault();
  
      if(!this.state.email || !this.state.password) {
          return;
      }
  
      var data = {
        email: this.state.email,
        password: this.state.password
      }
  
      var options = {
        method: "POST",
        headers: {
          "X-Requested-With": "XmlHttpRequest",
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)
      }
  
    fetch("http://localhost:8080/login", options)
    .then((res) => (res.json()))
    .then(
      (result) => {
        this.props.isLogin();
      },
      (error) => {
        this.setState({message: "Login ou mot de passe incorrect."});
      }
    )
  }

  render() {
    return(

      <View>
        <ImageBackground
          style={{ width: '100%', marginTop: 40 }}
          source={require('../img/background-big.png')} 
        > 
          <View style={{ marginVertical: 25, marginHorizontal: 25 }}>

            <Title style={{paddingVertical: 20, fontSize: 20, textAlign: 'center' }}>Se connecter</Title>

            <Text style={{textAlign: 'center', padding: 10, color: 'red' }}>{this.state.message}</Text>

            <TextInput
              style={{ marginTop: 15 }}
              placeholder={'e-Mail'}
              onChangeText={(text) => {this.setState({email:text})}} />
            <TextInput
              style={{ marginTop: 15 }}
              placeholder={'Mot de passe'}
              secureTextEntry
              onChangeText={(text) => {this.setState({password:text})}} />
                  
            <Button
            styleName="secondary"
            style={{ marginTop: 15}}
            onPress={this._checkLogin}>
              <Text style={{ fontSize: 18 }}>Valider</Text>
            </Button>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{textAlign: 'center', marginTop: 100}}>Pas encore enregistré ?</Text>
              <Text style={{textAlign: 'center', marginBottom: 25}}>Créer un compte, c'est gratuit !</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Login;