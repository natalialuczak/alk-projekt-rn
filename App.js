
import { SafeAreaView, StyleSheet } from "react-native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Header from './src/components/HeaderTab';
import Posts from './src/screens/posts';
import Stories from "./src/components/stories";

const queryClient = new QueryClient();

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <Posts/>
      
    </SafeAreaView>
  </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

