import React,{useEffect} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from "./../view_screens/tab_login/login";
import Home from "./../view_screens/drawer/home";
import Initialize from "./../initialize";
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();

export default function StackScreens(){

  return(
    <Stack.Navigator
        
    screenOptions={{
      headerShown: false,
    }}
    >
            <Stack.Screen name="Initialize" component={Initialize}/>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Home" component={Home}/>
</Stack.Navigator>
    
  );

}

