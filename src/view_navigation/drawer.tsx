import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, FlatList, Modal } from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  FAB, Divider, useTheme, Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Switch, Button
} from 'react-native-paper';

import {
  NavigationContainer
} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//pages

import Home from "../view_screens/drawer/home";

const Drawer = createDrawerNavigator();

export default function DefaultDrawer({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  function CustomDrawerContent(props) {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.viewCenter}>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity>
                  <Avatar.Image
                    source={{uri:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'} }
                    size={50}
                  />
                </TouchableOpacity>
                <View>
                  <Title>{'nome'}</Title>
                  <Caption style={styles.caption}>{'email@email.com'}</Caption>
                </View>
              </View>
              <Text style={styles.title}>{'\n\nMenu\n'}</Text>


            </View>
            <Divider style={{ backgroundColor: '#91a192', }} />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate("Home") }} />
          </View>
        </DrawerContentScrollView>
      </View>
    );
  }
  return (

    <PaperProvider>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          drawerStyle={{
            backgroundColor: '#fff',
            width: 240,
            borderColor: '#4682B4',
          }}>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  email: {
    fontWeight: 'bold',
    fontSize: 10,
    backgroundColor: 'transparent',
  },

  img: {

    padding: 20,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  viewCenter: {
    alignItems: 'center',
  },
  botaoMenu: {
    color: '#222',
    fontSize: 17,
    padding: 10,
  },

  ViewIni: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ViewSec: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtBtnSaibaMais: {
    color: '#c6cbef',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  caption: {
    fontSize: 9,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

}
);
