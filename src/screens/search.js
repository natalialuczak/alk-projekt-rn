import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBox";
import SearchGrid from "../components/SearchGrid";


const Search = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar/>
        <SearchGrid/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
  },
});

export default Search;
