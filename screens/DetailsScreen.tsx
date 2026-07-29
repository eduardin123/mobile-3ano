import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { HomeStackParamList } from '../navigation/HomeStack';

type DetailsRouteProp = RouteProp<HomeStackParamList, 'Details'>;

export default function DetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute<DetailsRouteProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Text style={styles.info}>Item ID: {route.params.itemId}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold' },
  info: { fontSize: 18, color: '#666', marginVertical: 24 },
  button: { backgroundColor: '#6C63FF', padding: 14, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});