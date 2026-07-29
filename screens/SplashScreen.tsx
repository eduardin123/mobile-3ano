import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <Text style={styles.subtitle}>Disciplina de Mobile</Text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
  },
  title: { fontSize: 36, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 18, color: '#ddd', marginTop: 8 },
});