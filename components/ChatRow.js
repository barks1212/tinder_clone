import React, { useEffect, useState } from "react";
import tw from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import useAuth from "../hooks/useAuth";
import { db } from "../firebase";
import { getMatchedUserInfo } from "../utils/utils";
import { styleSheets } from "../constants";

const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails?.users, user?.uid));
  }, [matchDetails, user]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches", matchDetails.id, "messages"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setLastMessage(snapshot.docs[0]?.data()?.message)
      ),
    [db, matchDetails]
  );

  return (
    <TouchableOpacity
      style={[
        tw("flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg"),
        styles.cardShadow,
      ]}
      onPress={() => navigation.navigate("Message", { matchDetails })}
    >
      <Image
        style={tw("rounded-full h-16 w-16 mr-4")}
        source={{ uri: matchedUserInfo?.photoURL }}
      />
      <View>
        <Text style={tw("text-lg font-semibold")}>
          {matchedUserInfo?.displayName}
        </Text>
        <Text>{lastMessage ?? "Say Hi!"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;

const styles = StyleSheet.create(styleSheets.cardShadows);
