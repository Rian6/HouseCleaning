import * as React from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Button, Card, Title, Paragraph, Caption, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesView from '../../resources/styles/view';
import stylesButton from '../../resources/styles/button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List, Chip } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

const { width, height } = Dimensions.get('window');

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Home({ navigation }) {
    return (
        <View>


            <View style={{ height: 150, backgroundColor: '#008ba8' }}>

                <Button
                    icon={({ color, size }) => (
                        <Icon
                            name="dots-vertical"
                            color={'white'}
                            size={30}
                        />
                    )}
                    onPress={navigation.openDrawer}
                    style={{ marginTop: 40, marginStart: 10, width: 5 }}
                ></Button>

                <Title style={{ fontSize: 20, marginHorizontal: 20, marginTop: 10 }}>Minha Home - Cascavel</Title>
                <Caption style={{ marginHorizontal: 20 }}>Rian Mendes dos Santos</Caption>
            </View>
            <View style={{ height: 40, marginStart: 0.01, borderBottomStartRadius: 220, backgroundColor: '#008ba8' }} />
            <SafeAreaView style={{ alignItems: 'center' }}>
                <ScrollView>

                    <View style={stylesView.model1_alinhada_linha}>
                        <Surface style={{
                            borderRadius: 10, marginRight: 10, width: 150, backgroundColor: '#e7ca4a', height: 200,
                            elevation: 10,
                        }}>
                            <TouchableOpacity>
                                <ImageBackground style={{ borderRadius: 10, width: 150, height: 200 }} source={require("../../../assets/images/spray.png")}>
                                </ImageBackground>
                            </TouchableOpacity>
                        </Surface>
                        <View>
                            <Surface style={{ elevation: 10, borderRadius: 10, marginBottom: 5, width: 180, backgroundColor: '#ec6f7f', height: 95 }}>
                                <TouchableOpacity >
                                    <ImageBackground style={{ borderRadius: 10, width: 180, height: 95 }} source={require("../../../assets/images/star.png")}>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </Surface>
                            <Surface style={{ elevation: 10, borderRadius: 10, marginTop: 5, width: 180, backgroundColor: '#6decad', height: 95 }}>
                            <TouchableOpacity >
                                    <ImageBackground style={{ borderRadius: 10, width: 180, height: 95 }} source={require("../../../assets/images/historico.png")}>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </Surface>
                        </View>
                    </View>
                    <Title style={{ color: 'black' }}>Anuncios</Title>
                    <TouchableOpacity style={{ borderColor: '#258391', borderLeftWidth: 5, padding: 5, borderTopRightRadius: 10, borderBottomRightRadius: 10, marginTop: 5, width: 340, backgroundColor: '#2ca9b4', height: 170 }}>
                        <List.Item
                            title="First Item"
                            description="Item description"
                            left={props => <List.Icon {...props} icon="calendar" />}
                            right={props => <List.Icon {...props} icon="arrow-right" />}
                        />
                        <View style={stylesView.model1_alinhada_linha}>
                            <Chip style={{ backgroundColor: '#3bcfcf' }} icon="baby" onPress={() => console.log('Pressed')}>teste</Chip>
                        </View>
                        <View style={stylesView.model1_alinhada_linha}>
                            <Text style={{ color: 'white', marginLeft: 10 }}>teste</Text>
                        </View>
                    </TouchableOpacity>
                
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}