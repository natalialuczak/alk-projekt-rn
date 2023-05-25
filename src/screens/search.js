import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBox";

const Search = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar/>
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
