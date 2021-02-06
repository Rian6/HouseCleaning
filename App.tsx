import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabPadrao from './src/view_navigation/tab'


export default function App() {
  return(
    <TabPadrao/>
  )
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1,
    },
  });
