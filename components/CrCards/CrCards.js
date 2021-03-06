import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const cardsData = [
  {
    id: "1",
    imgUrl: require("../../App/assets/images/fitness.jpg"),
    title: "Fitness",
  },
  {
    id: "2",
    imgUrl: require("../../App/assets/images/learn-english.jpg"),
    title: "Learning",
  },
  {
    id: "3",
    imgUrl: require("../../App/assets/images/cooking.jpg"),
    title: "Cooking",
  },
];

export default function CrCards() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {cardsData.map((item) => {
        return (
          <View key={item.id}>
            <Image
              source={item.imgUrl}
              style={{
                height: 135,
                width: 120,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "#fff",
              }}
            >
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
