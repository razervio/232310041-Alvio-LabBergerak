import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFriend from './src/components/friends/widgets/MyFriend';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Welcome to the App!</Text> */}
      <MyFriend/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:0,
  },
});
