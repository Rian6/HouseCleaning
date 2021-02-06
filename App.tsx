import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DefaultTab} from './src/view_navigation/tab'
export default function App() {
  const Tab = createBottomTabNavigator();
    return (
      <DefaultTab/>
    );
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1,
    },
  });
