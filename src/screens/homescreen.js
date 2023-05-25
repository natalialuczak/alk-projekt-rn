import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../../src/components/HeaderTab";
import Posts from "../../src/screens/posts";
import Stories from "../../src/components/Stories";

export default function Homescreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header />
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
