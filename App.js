import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ProfilRFC from './ProfilRFC';
import ProfilRCC from './ProfilRCC';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil dengan RFC</Text>
      <ProfilRFC />
      <Text style={styles.title}>Profil dengan RCC</Text>
      <ProfilRCC />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
