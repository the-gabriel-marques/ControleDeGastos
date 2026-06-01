import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { styles, colors } from '../styles/styles';
import { deleteGasto } from '../database/database';

export default function ExpenseItem({ data, onRefresh, navigation }) {
  const handleDelete = () => {
    Alert.alert("Excluir", `Deseja excluir "${data.descricao}"?`, [
      { text: "Não", style: "cancel" },
      { text: "Sim", style: "destructive", onPress: () => {
          deleteGasto(data.id, () => onRefresh());
        }
      }
    ]);
  };

  return (
    <TouchableOpacity style={styles.card} onLongPress={handleDelete} activeOpacity={0.7}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardTitle}>{data.descricao}</Text>
        <Text style={styles.cardCategory}>
          <Ionicons name="pricetag" size={14} color={colors.primary} /> {data.categoria}
        </Text>
        <Text style={styles.cardDate}>
          <Ionicons name="calendar" size={14} color={colors.textLight} /> {data.data}
        </Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.cardValue}>R$ {data.valor.toFixed(2).replace('.', ',')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddExpense', { gasto: data })}>
          <Ionicons name="pencil" size={20} color={colors.primary} style={{ marginTop: 10 }} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}