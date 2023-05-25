import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://rickandmortyapi.com/api/character";

const fetchCharacters = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
};

const Search = () => {
  const { data, isLoading, isError } = useQuery(["characters"], fetchCharacters);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error occurred while fetching data</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    listContent: {
      paddingTop: 8,
      paddingBottom: 20,
      paddingHorizontal: 8,
    },
    itemContainer: {
      flex: 1,
      margin: 1,
      aspectRatio: 1,
      borderRadius: 1,
      overflow: "hidden",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
    },
  });

export default Search;

