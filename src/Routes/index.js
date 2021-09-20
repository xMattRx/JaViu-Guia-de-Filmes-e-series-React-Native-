/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
import Details from '../views/Details';


const Stack = createStackNavigator();
const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator independent={true} screenOptions={{
            headerShown: false
        }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;