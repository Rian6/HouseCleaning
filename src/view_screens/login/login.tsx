import * as React from 'react';
import { Button, TextInput, Title } from 'react-native-paper';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const login = () => (
    <View style={styles.container}>
      <Title style={{color:'white', marginBottom:40 ,fontSize: 30}}>Login</Title>
        <TextInput placeholder="Email" style={{ width: 250, height: 50, borderBottomWidth: 10,borderLeftWidth: 5, borderColor:'#98f3f6', backgroundColor: '#c4f8fa',borderRadius:5, marginBottom: 20 }} />
        <TextInput placeholder="Senha" style={{ width: 250, height: 50, borderBottomWidth: 10,borderLeftWidth: 5, borderColor:'#98f3f6', backgroundColor: '#c4f8fa',borderRadius:5, marginBottom: 20 }} />
        <Button style={{ borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, backgroundColor: '#a2f7e9', borderColor:'#13e1bf' }}>Entrar</Button>
        <View style={{ flexDirection: 'row',alignSelf:'center', marginVertical:20 }}>
        <Button style={{borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, borderColor:'#2c9eed', width:160, marginHorizontal: 10 ,backgroundColor: '#74bff3' }}>Facebook</Button>
        <Button style={{borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, borderColor:'#ec272c', width:120, backgroundColor: '#f26c6f' }}>Google</Button>
        </View>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#493bee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_ext: {
    backgroundColor: '#489aef',
    borderColor: 'white',
    width: width - 80,
    marginTop: 80,
    marginBottom: 30,
    height: 10,
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default login;
