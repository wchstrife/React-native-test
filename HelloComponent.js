import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HelloComponent extends Component {
    render() {
        return <Text style = {
            { fontSize: 30, backgroundColor: 'red' } }> Hello </Text>
    }
}

export function sum(a, b) {
    return a + b;
}