import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/styles';
import { addGasto } from '../database/database';

export default function AddExpenseScreen({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleSave = () => {
    if (!descricao.trim() || !categoria.trim() || !valor.trim() || !data.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const valorNumerico = parseFloat(valor.replace(',', '.'));

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      Alert.alert('Erro', 'O valor deve ser um número maior que zero.');
      return;
    }

    addGasto(descricao, categoria, valorNumerico, data, () => {
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Descrição (ex: Ração do cachorro, Ingresso teatro)"
          value={descricao}
          onChangeText={setDescricao}
        />

        <TextInput
          style={styles.input}
          placeholder="Categoria (ex: Alimentação, Lazer, Saúde)"
          value={categoria}
          onChangeText={setCategoria}
        />

        <TextInput
          style={styles.input}
          placeholder="Valor (R$)"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Data (ex: 31/05/2026)"
          value={data}
          onChangeText={setData}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar Gasto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}