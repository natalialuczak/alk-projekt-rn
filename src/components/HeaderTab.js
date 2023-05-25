import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Instagram from "../../assets/Instagram.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={Instagram} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={styles.unreadBadge}></View>
          <AntDesign
            style={styles.icon}
            name="hearto"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather style={styles.icon} name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 16,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  logo: {
    width: 140,
    height: 60,
    resizeMode: "contain",
  },

  icon: {
    width: 24,
    height: 24,
    marginLeft: 22,
    resizeMode: "contain",
  },

  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 38,
    bottom: 14,
    width: 10,
    height: 10,
    borderRadius: 100,
    alignItems: "center",
    zIndex: 100,
  },
});