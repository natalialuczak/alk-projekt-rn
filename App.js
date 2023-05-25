import Posts from './src/screens/homepage';
import { SafeAreaView, StyleSheet } from "react-native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SearchBar from './src/components/SearchBox';

const queryClient = new QueryClient();

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <SafeAreaView style={styles.container}>
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

