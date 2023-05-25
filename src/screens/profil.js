import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://rickandmortyapi.com/api/character";

const fetchAvatar = async () => {
  const response = await fetch(`${API_URL}/1`);
  const data = await response.json();
  return data.image;
};

const fetchPosts = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data.results;
};

const Profil = () => {
  const { data: avatar, isLoading: avatarLoading, isError: avatarError } = useQuery(["avatar"], fetchAvatar);
  const { data: posts, isLoading: postsLoading, isError: postsError } = useQuery(["posts"], fetchPosts);

  if (avatarLoading || postsLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (avatarError || postsError) {
    return (
      <View style={styles.errorContainer}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.username}>Cowboy Ric</Text>
          <Text style={styles.bio}>	"Close Rick-counters of the Rick Kind"</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>1234</Text>
          <Text style={styles.statTitle}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>5678</Text>
          <Text style={styles.statTitle}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>9012</Text>
          <Text style={styles.statTitle}>Following</Text>
        </View>
      </View>
      <View style={styles.postsContainer}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postItem}>
            <Image source={{ uri: post.image }} style={styles.postImage} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,

    marginRight: 20,
  },
  headerInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    color: "gray",
    fontWeight: 500,
    marginTop: 6,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statTitle: {
    fontSize: 12,
    color: "gray",
  },
  postsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2,
  },
  postItem: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
  },
  postImage: {
    flex: 1,
    resizeMode: "cover",
  },
});


export default Profil;