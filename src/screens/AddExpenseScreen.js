import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import { addGasto, updateGasto } from '../database/database';

export default function AddExpenseScreen({ navigation, route }) {
  const gastoEdit = route.params?.gasto || null;

  const [descricao, setDescricao] = useState(gastoEdit ? gastoEdit.descricao : '');
  const [categoria, setCategoria] = useState(gastoEdit ? gastoEdit.categoria : '');
  const [valor, setValor] = useState(gastoEdit ? String(gastoEdit.valor) : '');
  const [data, setData] = useState(gastoEdit ? gastoEdit.data : '');

  const handleSave = () => {
    if (!descricao.trim() || !categoria.trim() || !valor.trim() || !data.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    const valorNum = parseFloat(valor.replace(',', '.'));
    if (isNaN(valorNum) || valorNum <= 0) {
      Alert.alert('Erro', 'Valor inválido. O valor deve ser acima de 0');
      return;
    }

    Alert.alert("Salvar", "Confirmar os dados do gasto?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Confirmar", onPress: () => {
          if (gastoEdit) {
            updateGasto(gastoEdit.id, descricao, categoria, valorNum, data, () => navigation.goBack());
          } else {
            addGasto(descricao, categoria, valorNum, data, () => navigation.goBack());
          }
        }
      }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Descrição</Text>
        <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} />

        <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Categoria</Text>
        <TextInput style={styles.input} value={categoria} onChangeText={setCategoria} />

        <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Valor (R$)</Text>
        <TextInput style={styles.input} value={valor} onChangeText={setValor} keyboardType="numeric" />

        <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Data</Text>
        <TextInput placeholder="dd/mm/aaaa" style={styles.input} value={data} onChangeText={setData} />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>{gastoEdit ? "Atualizar Gasto" : "Salvar Novo Gasto"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}