import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Adm = () =>{
    return(
        <View style={estilo.container}>
            <View style={estilo.quadro}>
                <View>
                <Text style={{  color: 'white',
                                fontSize: 14,
                                fontWeight: 700}}>
                {nome}
                </Text>
                </View>
            </View>
            <StatusBar style='auto'/>
        </View>
    )};    


const estilo = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        quadro:{
            backgroundColor: '#6079FF',
            justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            height: 140,
            borderRadius: 40,
            marginTop: 40  
        },
    });
export default Adm;