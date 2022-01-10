import React from "react";
import tw from "tailwind-rn";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colours } from "../constants";

const HomeScreenHeader = ({ navigation, user, logout }) => {
  return (
    <View style={tw("flex-row items-center justify-between px-5")}>
      <TouchableOpacity onPress={logout}>
        <Image
          style={tw("h-10 w-10 rounded-full")}
          source={{ uri: user?.photoURL }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
        <Image
          style={tw("h-14 w-14")}
          source={require("../assets/tinder-logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Ionicons
          name="chatbubbles-sharp"
          size={30}
          color={colours.tinderPink}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenHeader;
