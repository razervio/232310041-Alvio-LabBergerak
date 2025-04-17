import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 

export default class MyFriend extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FontAwesome5 name="search" size={20} color="grey" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    paddingHorizontal: 10,
  },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
});
