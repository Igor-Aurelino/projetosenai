import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicio from './TelaInicio';
import TelaCadastro from './TelaCadastro';
import TelaAdministrativa from './TelaAdministrativa';
import Adm from './componenteAdministracao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela Inicio'>
        <Stack.Screen name='Tela Inicio' component={TelaInicio} options={{headerShown: false}}/>
        <Stack.Screen name='Tela Cadastro' component={TelaCadastro} options={{headerShown: false}}/>
        <Stack.Screen name='Tela Administracao' component={TelaAdministrativa} options={{headerShown: false}}/>
        <Stack.Screen name='Componente Adm' component={Adm} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}