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
            showText: true
        };

        setInterval(() => {
            this.setState({ showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let dispaly = this.state.showText ? this.props.text : '';
        return (
            <Text style = {{fontSize: 30, backgroundColor: 'red' }}>  {dispaly} </Text>);
    }
}
