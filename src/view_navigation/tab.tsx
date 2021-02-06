import React from 'react';
import { StyleSheet } from 'react-native';
import Login from '../view_screens/login/login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cadastro from '../view_screens/login/cadastro';

//create by: rian
//04/02/2021
const Tab = createBottomTabNavigator();
const TabPadrao = () => (
      <NavigationContainer>
      <Tab.Navigator       
        tabBarOptions={{
          inactiveBackgroundColor:'#493bee',
          activeBackgroundColor:'#8980f4',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
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
      name="Cadastro"
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

  const styles = StyleSheet.create({
    tab: {
      flex: 1,
    },
  });

  
  export default TabPadrao;