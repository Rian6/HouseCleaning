import * as React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');


const cadastro = () => (
  <View style={styles.container}>
    <View style={styles.container_ext}>

    </View>
    <Text>adsfdsafsdaf</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_ext: {
    backgroundColor: 'black',
    borderColor: '#82eace',
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

export default cadastro