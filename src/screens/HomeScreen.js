import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from '../styles/styles';
import ExpenseItem from '../components/ExpenseItem';
import { getGastos } from '../database/database';

export default function HomeScreen({ navigation }) {
  const [gastos, setGastos] = useState([]);
  const [total, setTotal] = useState(0);

  const loadGastos = () => {
    getGastos((dados) => {
      setGastos(dados);
      const soma = dados.reduce((acc, item) => acc + item.valor, 0);
      setTotal(soma);
    });
  };

  useFocusEffect(
    useCallback(() => {
      loadGastos();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Total de Gastos</Text>
        <Text style={styles.headerTotal}>R$ {total.toFixed(2).replace('.', ',')}</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={gastos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ExpenseItem data={item} onRefresh={loadGastos} />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum gasto registrado ainda.</Text>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddExpense')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}