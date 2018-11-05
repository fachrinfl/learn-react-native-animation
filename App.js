import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimOne from './src/AnimOne';
import AnimTwo from './src/AnimTwo';

class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AnimTwo/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default App;