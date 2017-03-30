import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class StateTest extends Component {
    constructor(props){
        super(props);
        this.state={
            size:80,
        }
    }
    render() {
        return <Text style = {{fontSize: 30, backgroundColor: 'red' }}> Hello </Text>
    }
}

