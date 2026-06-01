import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../styles/styles';
import ExpenseItem from '../components/ExpenseItem';
import { getGastos } from '../database/database';

export default function HomeScreen({ navigation }) {
  const [gastos, setGastos] = useState([]);
  const [total, setTotal] = useState(0);
  
  const [busca, setBusca] = useState('');
  const [filtroCat, setFiltroCat] = useState('');
  const [ordemCrescente, setOrdemCrescente] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const loadGastos = () => {
    getGastos((dados) => {
      setGastos(dados);
      setTotal(dados.reduce((acc, item) => acc + item.valor, 0));
    });
  };

  useFocusEffect(useCallback(() => { loadGastos(); }, []));

  const gastosFiltrados = gastos
    .filter(g => g.descricao.toLowerCase().includes(busca.toLowerCase()))
    .filter(g => g.categoria.toLowerCase().includes(filtroCat.toLowerCase()))
    .sort((a, b) => ordemCrescente ? a.valor - b.valor : b.valor - a.valor);

  const themeStyles = {
    backgroundColor: isDarkMode ? '#121212' : colors.background,
    textColor: isDarkMode ? '#FFFFFF' : colors.text
  };

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={styles.headerTitle}>Total de Gastos</Text>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
              <Ionicons name={isDarkMode ? "sunny" : "moon"} size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Ionicons name="information-circle" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headerTotal}>R$ {total.toFixed(2).replace('.', ',')}</Text>
      </View>

      <View style={styles.content}>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10 }}>
          <TextInput 
            style={[styles.input, { flex: 1, marginBottom: 0 }]} 
            placeholder="Pesquisar descrição..." 
            value={busca} onChangeText={setBusca} 
          />
          <TextInput 
            style={[styles.input, { flex: 1, marginBottom: 0 }]} 
            placeholder="Filtrar categoria..." 
            value={filtroCat} onChangeText={setFiltroCat} 
          />
        </View>

        {/* Ordenação */}
        <TouchableOpacity style={{ marginBottom: 10, alignSelf: 'flex-end' }} onPress={() => setOrdemCrescente(!ordemCrescente)}>
          <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
            <Ionicons name="swap-vertical" size={16} /> Ordenar por valor ({ordemCrescente ? 'Menor' : 'Maior'})
          </Text>
        </TouchableOpacity>

        <FlatList
          data={gastosFiltrados}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ExpenseItem data={item} onRefresh={loadGastos} navigation={navigation} />}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum gasto encontrado.</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddExpense')}>
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}