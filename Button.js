import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const WarnaBox = () => {
  const [warnaKotak, setWarnaKotak] = useState('blue');

  const gantiWarna = () => {
    if (warnaKotak === 'blue') {
      setWarnaKotak('red');
    } else {
      setWarnaKotak('blue');
    }
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: warnaKotak,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#333',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
        }}
        onPress={gantiWarna}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Ubah Warna</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WarnaBox;
