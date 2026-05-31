import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/styles';
import { deleteGasto } from '../database/database';

export default function ExpenseItem({ data, onRefresh }) {
  const handleDelete = () => {
    Alert.alert(
      "Excluir Gasto",
      `Deseja realmente excluir "${data.descricao}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: () => {
            deleteGasto(data.id, () => {
              onRefresh();
            });
          }
        }
      ]
    );
  };

  return (
    <TouchableOpacity 
      style={styles.card} 
      onLongPress={handleDelete}
      activeOpacity={0.7}
    >
      <View style={styles.cardLeft}>
        <Text style={styles.cardTitle}>{data.descricao}</Text>
        <Text style={styles.cardCategory}>{data.categoria}</Text>
        <Text style={styles.cardDate}>{data.data}</Text>
      </View>
      <Text style={styles.cardValue}>
        R$ {data.valor.toFixed(2).replace('.', ',')}
      </Text>
    </TouchableOpacity>
  );
}