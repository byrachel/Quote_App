import React, { Component } from 'react';

import Header from '../../../components/Header/Header';
import Subtitle from '../../../components/Subtitle/Subtitle';

import { View, Image, ScrollView } from 'react-native';
import { ImageBackground, Title, Text, Icon } from '@shoutem/ui';

class Flow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: []
        }
    }

    static navigationOptions = {
        tabBarIcon: () => (
        <Image
            style={{
            width: 28,
            height: 28
        }}
        source={require('../../../components/img/quote-black.png')} />),
        tabBarOptions: {
            activeTintColor: '#8fe0d0',
            showLabel: false,
            marginTop: 5,
          }
    }

    componentDidMount() {
        this._fetchQuotes();
    }
      
    _fetchQuotes = () => {
    
        var options = {
            method: 'GET',
            headers: {
                "X-Requested-With": "XmlHttpRequest",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }
        
        fetch('http://localhost:8080/quotes/flow', options)
        .then((res) => (res.json()))
        .then(
            (result) => {
                this.setState({quotes: result.quotes});
            },
            (error) => {
                this.setState({message: "Aucune citation partagée aujourd'hui."});
            }
    )}
    

    _quotesFlow = () => {

        var quotes = this.state.quotes;
        
        var flow = quotes.map((quote) => {
        return(
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',}}>
                    
                    <ImageBackground
                        style={{aspectRatio: 1, margin: 20, minWidth: 350}}
                        source={require('../../../components/img/background-square.png')}>
                        <Title style={{textAlign: 'center', margin: 25}}>{quote.quote}</Title>
                        <Text>{quote.author}</Text>
                
                    </ImageBackground>

                </View>

                <View style={{marginHorizontal: 25}}>
                    <Text style={{fontWeight:'bold', textAlign:'center'}}>#{quote.category}</Text>
                    <Text style={{paddingHorizontal: 15, textAlign:'center'}}> Posté par: {quote.postedBy}</Text>
                </View>
            </View>
            );
        });
        return(
            <View>{flow}</View>
        );
      }

    render() {
        return(

        <ScrollView>
            <Header />
            <Subtitle subtitle="Ma dose d'inspiration" />
            <Icon style={{ margin: 20, color: '#8fe0d0' }} name="down-arrow" ></Icon>
            {this._quotesFlow()}
        </ScrollView>
        )
    }
}

export default Flow;