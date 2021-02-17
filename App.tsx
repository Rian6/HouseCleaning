import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from "./src/view_screens/tab_login/login";
import Home from "./src/view_screens/drawer/home";
import DefaultDrawer from "./src/view_navigation/drawer";
import Initialize from "./src/initialize";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Initialize" component={Initialize} />
        <Stack.Screen name="DefaultDrawer" component={DefaultDrawer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

