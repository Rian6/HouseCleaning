import * as React from 'react';
import { Button, TextInput, Title } from 'react-native-paper';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Login() {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row',alignSelf:'center', marginVertical:20 }}>

        <Button style={{borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, borderColor:'black', width:120, marginHorizontal: 10,backgroundColor: 'white' }}>Entrar</Button>
        <Button style={{borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, borderColor:'black', width:120, backgroundColor: 'white' }}>Entrar</Button>
        </View>
        <TextInput style={{ width: 250, height: 50, borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, marginBottom: 20 }} />
        <TextInput style={{ width: 250, height: 50, borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, marginBottom: 20 }} />
        <Button style={{ borderBottomWidth: 10,borderLeftWidth: 5,borderRadius:5, backgroundColor: 'white', borderColor:'black' }}>Entrar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b771df',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_ext: {
    backgroundColor: '#424242',
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
