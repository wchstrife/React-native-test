import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponent, { sum } from './HelloComponent';
export default class setup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            result: ''
        })
    }
    render() {
        return ( 
            <View style = { styles.container }>
                <Text style = {{ fontSize: 20 } }
            onPress = {() => {
                    var result = sum(2, 3);
                    this.setState({
                        result: result,
                    })
                }
            } 
            >2 + 3 = { this.state.result } </Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});