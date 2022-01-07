import React, { useState, useEffect } from "react";
import tw from "tailwind-rn";
import { onSnapshot, collection, query, where } from "@firebase/firestore";
import { FlatList, Text, View } from "react-native";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "matches"),
        where("usersMatched", "array-contains", user.uid)
      ),
      (snapshot) =>
        setMatches(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, [user]);

  return matches?.length > 0 ? (
    <FlatList
      data={matches}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  ) : (
    <View style={tw("p-5")}>
      <Text style={tw("text-center text-lg")}>No matches at the moment</Text>
    </View>
  );
};

export default ChatList;