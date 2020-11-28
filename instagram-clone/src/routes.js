import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

const { Navigator, Screen }  = createStackNavigator();

import logo from './images/instagram.png';

import Feed from './pages/Feed';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerStyle: { backgroundColor: '#F5F5F5' }, headerTitleAlign: 'center' }} >
                <Screen 
                    name="Feed"
                    component={Feed}
                    options={{
                        headerTitle: <Image source={logo} />,
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}