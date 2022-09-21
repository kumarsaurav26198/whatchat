import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useChatClient } from './useChatClient';


export default function Chatscreen() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Chatscreen</Text>
            </View>
        </GestureHandlerRootView>
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