import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://rickandmortyapi.com/api/character";

const fetchPosts = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const Posts = () => {
  const { data, isLoading, isError } = useQuery(["posts"], fetchPosts);

  if (isLoading) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.userInfoContainer}>
        <Image style={styles.avatar} source={{ uri: item.image }} />
        <Text style={styles.username}>{item.name}</Text>
      </View>
      <Image style={styles.postImage} source={{ uri: item.image }} />
      <View style={styles.postContent}>
        <Text style={styles.likes}>{item.likes} likes</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.comments}>
          {item.comments ? item.comments.length : 0} comments
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  postContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
  },
  postImage: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_WIDTH - 40,
    resizeMode: "cover",
  },
  postContent: {
    padding: 10,
  },
  likes: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  comments: {
    color: "gray",
  },
});

export default Posts;