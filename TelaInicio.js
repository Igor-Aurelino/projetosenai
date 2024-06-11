import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native';

export default function TelaInicio({navigation}) {
    var usuario = ''
    var senha = ''

    function Login(){
      if(usuario == 'admin' && senha == '1234'){
          navigation.navigate('Tela Inicio')
      }else{
        Alert.alert('Usuário e/ou senha incorretos!')
      }
    }
  return (
    <View style={estilo.container}>
        <View style={estilo.fundo}>
            <Text style={{color: 'white', 
                fontSize: 25, 
                fontWeight: 800,
                margin: 90}}>
                Login
            </Text>

            <View style={estilo.usuarioSenha}>
                    <TextInput
                    onChangeText={(texto) => {usuario=texto}}
                    mode='outlined'
                    label='usuário'
                    size={10}
                    style={{  height: 50,
                              width: 250,
                              marginBottom: 20,
                              marginTop: 30,
                              backgroundColor:"#fff",
                              borderRadius:"2rem"}}
                    />
                    <TextInput
                    onChangeText={(texto) => {senha=texto}}
                    mode='outlined'
                    label='senha'
                    size={20}
                    style={{  height: 50,
                              width: 250,
                              marginBottom: 20}}
                    />
                    <TouchableOpacity
                    onPress={() => Login()}>
                    <View style={estilo.botao}>
                        <Text style={{  color: 'white',
                                        fontSize: 15,
                                        fontWeight: 600}}>
                          Entrar
                        </Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={() => {navigation.navigate('Tela Cadastro')}}>
                      <View style={estilo.Cadastro}>
                          <Text style={{color: 'white',
                                        fontWeight: 500,
                                        fontSize: 15
                                      }}>
                              Não tenho conta
                          </Text>
                      </View>
                    </TouchableOpacity>

                    <View style={estilo.cximagem}>
                    <Image
                    source={require('./assets/logo_senai.png')}
                    />
                    </View>
            </View>
        </View>  
      <StatusBar style="auto" />
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  fundo:{
    backgroundColor: '#3850D2',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  usuarioSenha:{
    alignItems: 'center',
    borderRadius: 20

  },
  cximagem:{
    marginTop: 120
  },

  botao:{
    backgroundColor: '#6079FF',
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    margin: 20
  },
  
});