import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabPadrao from './view_navigation/tab'
import { NavigationContainer } from '@react-navigation/native';
import DefaultDrawer from './view_navigation/drawer';
import StackScreens from './view_navigation/stack';

export default function Initialize() {
  return(
    <TabPadrao/>
  )
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1,
    },
  });