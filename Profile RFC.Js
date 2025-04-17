import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfilRFC = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/64/64572.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nama: Alvio Reza Febrian</Text>
      <Text style={styles.text}>NPM: 232310041</Text>
      <Text style={styles.text}>Jurusan: Teknik Informatika</Text>
      <Text style={styles.text}>Hobi: Bermain gitar,  melukis</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default ProfilRFC;
