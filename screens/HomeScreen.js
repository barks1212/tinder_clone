import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-rn";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import useAuth from "../hooks/useAuth";
import { colours } from "../constants";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  return (
    <SafeAreaView>
      <View style={tw("flex-row items-center justify-between px-5")}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={{ uri: user?.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
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
      {/* <Text>Home screenss</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />
      <Button title="Logout" onPress={logout} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
