import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../styles/styles';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.content, { alignItems: 'center', marginTop: 40 }]}>
        <Ionicons name="wallet" size={80} color={colors.primary} />
        <Text style={[styles.headerTitle, { color: colors.text, fontSize: 24, marginTop: 10 }]}>Controle de Gastos</Text>
        <Text style={{ textAlign: 'center', marginTop: 20, color: colors.textLight, fontSize: 16 }}>
          Aplicativo desenvolvido para gestão de gastos pessoais. {'\n\n'}
          Através dele, você pode cadastrar, editar e excluir seus gastos, além de visualizar o total gasto. {'\n\n'}
          O app é simples, intuitivo e leve, ideal para quem quer controlar suas finanças de forma prática.
        </Text>
      </View>
    </ScrollView>
  );
}