<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
=======
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFriend from './src/components/friends/widgets/MyFriend';
>>>>>>> 551f790dd4c5c9201647cf3dda7f3bd431a43d09

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Open up App.js to start working on your app!</Text>
=======
      {/* <Text>Welcome to the App!</Text> */}
      <MyFriend/>
>>>>>>> 551f790dd4c5c9201647cf3dda7f3bd431a43d09
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
<<<<<<< HEAD
    alignItems: 'center',
    justifyContent: 'center',
=======
    padding:0,
>>>>>>> 551f790dd4c5c9201647cf3dda7f3bd431a43d09
  },
});
