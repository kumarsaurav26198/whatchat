import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 4,
        padding: 10,
        elevation: 2,
    },
    buttonLogIn: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});