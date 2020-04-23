import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Sandbox() {
    return(
        <View style = {styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    boxOne: {
        backgroundColor: 'red',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {
        backgroundColor: 'violet',
        padding: 30,
    },
    boxFour: {
        backgroundColor: 'blue',
        padding: 40,
    }
});