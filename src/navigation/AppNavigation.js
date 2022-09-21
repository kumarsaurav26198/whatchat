import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chatscreen, SettingScreen } from '../pages/afterlogin';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Chatscreen" component={Chatscreen}
                    options={() => ({
                        title: 'Chats',
                    })}
                />
                <Stack.Screen name="Setting" component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
});
