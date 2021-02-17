import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';

const stylesButton = StyleSheet.create({
    model1_verde_fraco: {
        borderBottomWidth: 10,
        borderLeftWidth: 5,
        borderRadius: 5,
        backgroundColor: '#a2f7e9',
        borderColor: '#13e1bf'
    },
    model2_azul:{
        borderBottomWidth: 10,
        borderLeftWidth: 5,
        borderRadius: 5,
        borderColor: '#2c9eed',
        width: 160,
        marginHorizontal: 10,
        backgroundColor: '#74bff3'
    },
    model3_vermelho:{ 
        borderBottomWidth: 10, 
        borderLeftWidth: 5, 
        borderRadius: 5, 
        borderColor: '#ec272c', 
        width: 120, 
        backgroundColor: '#f26c6f' }
})

export default stylesButton;