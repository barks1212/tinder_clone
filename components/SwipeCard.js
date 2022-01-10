import React from "react";
import tw from "tailwind-rn";
import { View, Image, Text, StyleSheet } from "react-native";
import { styleSheets } from "../constants";

const SwipeCard = ({ card }) => {
  return card ? (
    <View key={card.id} style={tw("relative bg-white h-3/4 rounded-xl")}>
      <Image
        style={tw("absolute top-0 h-full w-full rounded-xl")}
        source={{ uri: card.photoURL }}
      />
      <View
        style={[
          tw(
            "absolute bottom-0 bg-white w-full flex-row justify-between items-center h-20 px-6 py-2 rounded-b-xl"
          ),
          styles.cardShadow,
        ]}
      >
        <View>
          <Text style={tw("text-xl font-bold")}>{card.displayName}</Text>
          <Text>{card.job}</Text>
        </View>
        <Text style={tw("text-2xl font-bold")}>{card.age}</Text>
      </View>
    </View>
  ) : (
    <View
      style={[
        tw("relative bg-white h-3/4 rounded-xl justify-center items-center"),
        styles.cardShadow,
      ]}
    >
      <Text style={tw("font-bold pb-5")}>No more profiles</Text>
      <Image
        style={tw("h-20 w-full")}
        height={100}
        width={100}
        source={{ uri: "https://links.papareact.com/6gb" }}
      />
    </View>
  );
};

export default SwipeCard;

const styles = StyleSheet.create(styleSheets.cardShadows);
