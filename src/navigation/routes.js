import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AboutScreen from '../screens/AboutScreen';
import { colors } from '../styles/styles';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.surface, headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meus Gastos' }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Cadastro de Gasto' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre o App' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}