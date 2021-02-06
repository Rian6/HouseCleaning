import React from 'react';
import { StyleSheet } from 'react-native';
import Cadastro from './../view_screens/login/cadastro';
import Login from './../view_screens/login/login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//create by: rian
//04/02/2021

export function DefaultTab() {
  const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
      <Tab.Navigator       
        tabBarOptions={{
          inactiveBackgroundColor:'#6c1e82',
          activeBackgroundColor:'#b771df',
        activeTintColor: 'black',
        inactiveTintColor: '#fdfefd',
        iconStyle:{width:50}
      }}>
      <Tab.Screen         
      name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />
      <Tab.Screen       
      name="Cadastrar"
        component={Cadastro}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="badge-account-horizontal-outline" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1,
    },
  });
