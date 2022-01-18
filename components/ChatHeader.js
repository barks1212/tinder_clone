import React from "react";
import tw from "tailwind-rn";
import { View, Text, TouchableOpacity } from "react-native";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colours } from "../constants";

const ChatHeader = ({ title, callEnabled }) => {
  const navigation = useNavigation();

  // this is a comment to check rebasing works

  return (
    <View style={tw("p-2 flex-row items-center justify-between")}>
      <View style={tw("flex flex-row items-center")}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw("p-2")}>
          <Ionicons
            name="chevron-back-outline"
            size={34}
            color={colours.tinderPink}
          />
        </TouchableOpacity>
        <Text style={tw("text-2xl font-bold pl-2")}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity style={tw("rounded-full mr-4 p-3 bg-red-200")}>
          <Foundation style={tw("")} name="telephone" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChatHeader;
