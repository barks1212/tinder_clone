import React from "react";
import tw from "tailwind-rn";
import { View, Text, SafeAreaView } from "react-native";
import ChatHeader from "../components/ChatHeader";
import ChatList from "../components/ChatList";

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <ChatHeader title="Chat" />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;
