import React from "react";
import { View, TextInput, StyleSheet} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons"


const SearchBar = () => {
    return (
      <View style={styles.container}>
        <Ionic name="search" size={18} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Szukaj..."
          placeholderTextColor="#888"
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginHorizontal: 16,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
  });
  
  export default SearchBar;