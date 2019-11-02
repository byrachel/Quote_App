import React, { Component } from 'react'

import Header from '../../../components/Header/Header'
import Subtitle from '../../../components/Subtitle/Subtitle'
import Login from '../../../components/Login/Login'

import { View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Text, Title } from '@shoutem/ui';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
            avatar: '',
            username: '',
            email: '',
            password: null,
            },
            logout: false,
            message: '',
            quotes: []
        }
    }

    static navigationOptions = {
        tabBarIcon: () => (
        <Image
            style={{
            width: 28,
            height: 28,
        }}
        source={require('../../../components/img/profil.png')} />),
        tabBarOptions: {
            activeTintColor: '#8fe0d0',
            showLabel: false,
            marginTop: 5,
        }
    }


    _logout = () => {
        var options = {
        method: 'GET',
        headers: {
          "X-Requested-With": "XmlHttpRequest",
          "Content-Type": "application/json"
          },
        credentials: "include"
        }
      
        fetch('http://localhost:8080/logout', options)
        .then((res) => (res.json()))
        .then(
          (result) => {
            this.setState({logout: true});
          }
        )
        if(this.state.logout === true) {
            return(this.props.navigation.navigate("Home"));
        }
      }
    
    componentDidMount() {
        this._getAccountInfo();
        this._fetchMyQuotes();
    }
      
    _fetchMyQuotes = () => {
    
        var options = {
            method: 'GET',
            headers: {
                "X-Requested-With": "XmlHttpRequest",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }
        
        fetch('http://localhost:8080/quotes/myquote/', options)
        .then((res) => (res.json()))
        .then(
            (result) => {
                this.setState({quotes: result.quotes});
            },
            (error) => {
                this.setState({message: "Aucune citation partagée."});
            }
    )}

    _getAccountInfo = () => {
        var options = {
            method: 'GET',
            headers: {
                "X-Requested-With": "XmlHttpRequest",
                "Content-Type": "application/json"
            },
        credentials: "include"
        }
        
        fetch('http://localhost:8080/myAccount', options)
        .then((res) => (res.json()))
        .then(
            (result) => {
                this.setState({
                user : {
                    email: result.email,
                    username: result.username,
                    description: result.description,
                    avatar: result.avatar
                }
                });
            },
            (error) => {
                this.setState({message: "Créez un compte ou connectez-vous."});
            }
        )
    }
    
    _myQuotes = () => {

        var quotes = this.state.quotes;
        var flow = quotes.map((quote) => {
        return(
            <View>
                <Title style={{paddingHorizontal: 20}}>{quote.quote}</Title>
                <Text style={{paddingHorizontal: 20}}>{quote.author}</Text>
                <View style={{margin: 15}} />
            </View>
            );
        });
        return(
            <View>{flow}</View>
        );
    }

    _displayUser = () => {
        if(this.state.user.email) {
          return(
            <View>

                <ImageBackground style={{ width: '90%', height: '85%' }}
                source={require('../../../components/img/left.png')} >

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginHorizontal: 25, marginVertical: 35 }}>
                    <View style={{ width: '30%' }}>
                        <Image style={{ width: 90, height: 90 }}
                        source={require('../../../components/img/quote-icon.png')}></Image>
                    </View>

                    <View style={{ width: '70%' }}>
                        <Text style={{ marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Pseudo: </Text>
                            <Text>{this.state.user.username} </Text>
                        </Text>
                        <Text style={{ marginTop: 12 }}>
                            <Text style={{ fontWeight: 'bold' }}>E-mail: </Text>
                            <Text>{this.state.user.email}</Text>
                        </Text>
                        <TouchableOpacity
                            style={{ marginTop: 12, padding: 3, backgroundColor: '#F1F1F1',}}
                            onPress={this._logout}>
                            <Text style={{padding: 3}}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection: 'row', margin: 20 }}>
                    <View style={{backgroundColor: '#8fe0d0', height: 1, flex: 1, alignSelf: 'center'}} />
                        <Text style={{ alignSelf:'center', paddingHorizontal: 10, fontSize: 21, fontWeight: '700', color: '#8fe0d0'}}>Mes citations</Text>
                    <View style={{backgroundColor: '#8fe0d0', height: 1, flex: 1, alignSelf: 'center'}} />
                </View>

                <View>
                    {this._myQuotes()}
                </View>

                <View style={{ margin: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ width: 200,height: 42,padding: 10,margin: 10,backgroundColor: '#d1b3dc',}}
                        onPress={() => this.props.navigation.navigate('Quote')}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 16 }}> Ajouter une citation </Text>
                    </TouchableOpacity>
                
                </View>

                </ImageBackground>
            </View>
    )
}
else {
    return(
        <Login isLogin={this._getAccountInfo}/>
    )
}}

    render() {
        return(
            <ScrollView>
                <Header />
                <Subtitle subtitle='Mon compte' />
                
                    {this._displayUser()}

            </ScrollView>
        )
    }
}

export default Profil;