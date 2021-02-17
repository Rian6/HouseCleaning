import React, { useState } from 'react'
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, Title, Caption, Paragraph, Divider, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import stylesTextInput from '../../resources/styles/textInput';
import stylesButton from '../../resources/styles/button';
import stylesView from '../../resources/styles/view';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import { TextInputMask } from 'react-native-masked-text'

export default function Cadastro({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const formatDate = () => {
    var formattedDate = format(date, "dd/MM/yyyy");
    return formattedDate
  };
  return (
    <View style={stylesView.model2_container}>
      <Title style={{ color: 'white', marginBottom: 40, fontSize: 30 }}>Cadastro</Title>
      <KeyboardAvoidingView>
        <TextInput placeholder="Nome" style={stylesTextInput.model1} />
        <TextInput keyboardType='number-pad'
          render={props =>
            <TextInputMask
              type={'cpf'}
              value={cpf}
              placeholder='CPF'
              onChangeText={value =>{setCpf(value)}}
            />
          }
          maxLength={9} placeholder="Cpf" style={stylesTextInput.model1} />
        <TextInput keyboardType='email-address' placeholder="Email" style={stylesTextInput.model1} />
        <TextInput textContentType='password' placeholder="Senha" style={stylesTextInput.model1} />
        <TextInput textContentType='password' placeholder="Digite a senha novamente" style={stylesTextInput.model1} />
      </KeyboardAvoidingView>
      <Button style={stylesButton.model1_verde_fraco} onPress={() => setShow(true)}>Data de nascimento</Button>
      <View style={stylesView.model1_alinhada_linha}>
        <Paragraph style={{ color: 'white' }}>{"Data de nascimento:" + formatDate()}</Paragraph>
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <Button style={stylesButton.model1_verde_fraco} onPress={() => navigation.navigate('DefaultDrawer')}>Cadastrar</Button>
      <View style={stylesView.model1_alinhada_linha}>
        <Divider style={{ marginHorizontal: 10, marginTop: 20, width: 100, height: 5 }} />
        <Title style={{ color: 'white' }}>Ou</Title>

        <Divider style={{ marginHorizontal: 10, marginTop: 20, width: 100, height: 5 }} />
      </View>
      <View style={stylesView.model1_alinhada_linha}>
        <Button style={stylesButton.model2_azul}>Facebook</Button>
        <Button style={stylesButton.model3_vermelho}>Google</Button>
      </View>
    </View>
  )
}