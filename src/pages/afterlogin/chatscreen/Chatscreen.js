import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

export default function Chatscreen() {
    return (
        <View style={styles.container}>
            <Text>Chatscreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f5f7",
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: "#fff",
        position: "absolute",
        left: -120,
        top: -20
    }
});