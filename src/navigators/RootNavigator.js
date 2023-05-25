import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Homescreen from "../../src/screens/homescreen";
import Search from "../../src/screens/search";
import Profil from "../../src/screens/profil";
import Reels from "../../src/screens/reels";
import Shop from "../../src/screens/shop";
import ReelsIcon from "../../assets/reels2.png";
import ShopIcon from "../../assets/shop2.png";

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

export default function Routes() {
  return (
    <Tab.Navigator initialRouteName="Homescreen" screenOptions={screenOptions}>
      <Tab.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <AntDesign
                style={styles.icon}
                name="home"
                size={24}
                color={"black"}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Image style={styles.icon} source={ReelsIcon} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Image style={styles.icon} source={ShopIcon} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Ionicons name="person-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
