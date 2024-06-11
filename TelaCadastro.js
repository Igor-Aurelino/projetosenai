import {View, Text, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';

export default function TelaCadastro({navigation}) {
    return(
        <View style={estilo.container}>
            <View style={estilo.fundo}>
                <View>
                    <Text style={{color: 'white', 
                        fontSize: 25, 
                        fontWeight: 800, 
                        margin: 90}}>
                                Cadastrar
                    </Text>
                </View>
                <View>
                    <TextInput
                    mode='outlined'
                    label='Nome Completo'
                    style={{width: 250, height: 50, margin: 10}}
                    />
                    <TextInput
                    mode='outlined'
                    label='Usuário'
                    style={{width: 250, height: 50, margin: 10}}
                    />
                    <TextInput
                    mode='outlined'
                    label='Senha'
                    style={{width: 250, height: 50, margin: 10}}
                    />
                    <TextInput
                    mode='outlined'
                    label='Repita a senha'
                    style={{width: 250, height: 50, margin: 10}}
                    />
                </View>
               
                <View style={estilo.botaoCadastro}>
                    <Text style={{  color: 'white', 
                                    fontSize: 15,
                                    fontWeight: 600}}>
                    Cadastrar
                    </Text>
                </View>
              
                <View>
                    <Image
                    source={require('./assets/logo_senai.png')}
                    />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
const estilo = StyleSheet.create({
    container:{
        flex: 1
    },
    fundo:{
        backgroundColor: '#3850D2',
        height: '100%',
        alignItems: 'center'
    },
    botaoCadastro:{
        backgroundColor: '#6079FF',
        height: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        margin: 30
    }
});