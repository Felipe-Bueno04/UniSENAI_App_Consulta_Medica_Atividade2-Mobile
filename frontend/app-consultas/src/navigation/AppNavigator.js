import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateConsultaScreen } from '../screens/CreateConsultaScreen';
import { ListConsultasScreen } from '../screens/ListConsultasScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListConsultas">
        <Stack.Screen
          name="ListConsultas"
          component={ListConsultasScreen}
          options={{ title: 'Consultas Agendadas' }}
        />
        <Stack.Screen
          name="CreateConsulta"
          component={CreateConsultaScreen}
          options={{ title: 'Agendar Nova Consulta' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}