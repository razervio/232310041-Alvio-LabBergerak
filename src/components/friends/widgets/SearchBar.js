import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; 
const SearchBar = () => {
    return (
        <View style={styles.searchBox}>
            <FontAwesome5 name="search" size={20} color="grey" />
            <TextInput placeholder="Search"/>
        </View>
    );
}


const styles = StyleSheet.create({
    searchBox: {
        padding : 10,
        borderWidth : 1,
        borderColor : "grey",
        borderRadius : 10,
        backgroundColor : "white",
        flexDirection : "row",
    },
});

export default SearchBar;
