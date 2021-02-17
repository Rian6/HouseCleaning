import * as React from 'react';
import {View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import stylesTextInput from '../../resources/styles/textInput';
import stylesButton from '../../resources/styles/button';
import stylesView from '../../resources/styles/view';

export default function Login({ navigation }) {
  return(
  <View style={stylesView.model2_container}>
    <Title style={{ color: 'white', marginBottom: 40, fontSize: 30 }}>Login</Title>
    <TextInput placeholder="Email" style={stylesTextInput.model1} />
    <TextInput placeholder="Senha" style={stylesTextInput.model1} />
    <Button style={stylesButton.model1_verde_fraco} onPress={() => navigation.navigate('DefaultDrawer')}>Entrar</Button>
    <View style={stylesView.model1_alinhada_linha}>
      <Button style={stylesButton.model2_azul}>Facebook</Button>
      <Button style={stylesButton.model3_vermelho}>Google</Button>
    </View>
  </View>
  )
  }

