import React, { Component } from 'react'

import { View, ImageBackground, Picker } from 'react-native';
import { TextInput, Button, Text } from '@shoutem/ui';

const quoteCategories = [
    {
        label: 'Choisir une catégorie',
        value: 'none',
    },
    {
        label: 'Motivation',
        value: 'motivation',
    },
    {
        label: 'Créativité',
        value: 'creativite',
    },
    {
        label: 'Amour',
        value: 'amour',
    },
]

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: {
                author: '',
                quote: '',
                category: '',
                PostedBy: 'user._id'
            },
            message: ''
        }
    }

    addQuote = (event) => {
        event.preventDefault();
        console.log(this.state.categories)
    
        var data = {
            quotes: {
                author: this.state.author,
                quote: this.state.quote,
                category: this.state.category,
                postedBy: this.state.postedBy
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
    
        fetch('http://localhost:8080/quotes/', options)
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
  
            <View>

                <ImageBackground
                    style={{ width: '100%', marginTop: 40 }}
                    source={require('../img/background-big.png')} >

                    <Text style={{textAlign: 'center', marginTop: 20, color: 'red' }}>{this.state.message}</Text> 

                    <View style={{ marginTop: 0, marginBottom: 80, marginHorizontal: 25 }}>

                        <Picker
                            selectedValue={this.state.category}
                            onValueChange={itemValue => this.setState({ category: itemValue })}>
                            {quoteCategories.map((i, index) => (
                            <Picker.Item key={index} label={i.label} value={i.value} />
                            ))}
                        </Picker>

                        <TextInput
                            style={{
                                margin: 10,
                                fontSize: 18
                            }}
                            placeholder={'Auteur'}
                            onChangeText={(text) => {this.setState({author:text})}}
                        />
                        <TextInput
                            style={{
                                margin: 10,
                                height: 120,
                                fontSize: 18
                            }}
                            multiline={true}
                            numberOfLines={5}
                            placeholder={'Citation'}
                            onChangeText={(text) => {this.setState({quote:text})}}
                        />

                        <Button style={{
                            margin: 10 }}
                            styleName="secondary"
                            onPress={this.addQuote}>
                            <Text
                            style={{
                                fontSize: 18
                            }}>Enregistrer</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default Add;
