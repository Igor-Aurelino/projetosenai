import {View, Text, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicon from '@expo/vector-icons/Ionicons';
import Adm from './componenteAdministracao';

export default function TelaAdministrativa() {
    return(
        <View style={estilo.container}>
            <View style={estilo.fundo}>
                    <View style={estilo.nomeUsuario}>
                            <View>
                                <Text style={{color: 'white', fontSize: 15}}>Bem vindo,</Text>
                                <Text style={{color: 'white', fontSize: 20, fontWeight: 800}}>Fulano de tal</Text>
                            </View>
                            <View style={estilo.circulo}>
                                <Ionicon name='person' size={25} color={'gray'}/>
                            </View>
                            
                    </View>  
                    <View style={estilo.requerimento}>
                    <Adm
                    nome='Requerimento'
                    />
                    <Adm
                    nome='Notas'/>
                    </View>

                    <View style={estilo.frequencia}>
                    <Adm
                    nome='Frequência'
                    />
                    <Adm
                    nome='Avaliações'/>
                    </View>

                    <View style={estilo.documentos}>
                    <Adm
                    nome='Financeiro'
                    />
                    <Adm
                    nome='Documentos'/>
                    </View>     
    
                <View style={estilo.cximagem}>
                <Image
                source={require('./assets/logo_senai.png')}/>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
const estilo = StyleSheet.create({
    container:{
        flex: 1,
    },
    fundo:{
        backgroundColor: '#3850D2',
        height: '100%'
    },
    nomeUsuario:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 60,
        marginLeft: 30
    },
    circulo:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        width: '14%',
        borderRadius: 100
    },
    cximagem:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    requerimento:{
        alignItems: 'center',
        flexDirection: 'row',  
    },
    frequencia:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    documentos:{
        alignItems: 'center',
        flexDirection: 'row',
    }
});