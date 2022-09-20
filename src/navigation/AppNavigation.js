import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chatscreen, SettingScreen } from '../pages/afterlogin';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Chatscreen" component={Chatscreen} />
                <Stack.Screen name="Setting" component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

