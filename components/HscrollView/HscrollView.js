import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function HscrollView() {
  const datas = {
    names: [
      {
        id: "1",
        imgUrl: require("../../assets/images/st-george-flag-std_2.jpg"),
        description: "3000 Most Popular English Vocabulary",
        title: "Mrs. Andora Lion",
      },
      {
        id: "2",
        imgUrl: require("../../assets/images/learn-english.jpg"),
        description: "3000 Most Popular English Vocabulary",
        title: "Mrs. Andora Lion",
      },
      {
        id: "3",
        imgUrl: require("../../assets/images/cooking.jpg"),
        description: "3000 Most Popular English Vocabulary",
        title: "Mrs. Andora Lion",
      },
    ],
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {datas.names.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.imgUrl} style={styles.image} />
            <View style={styles.copy}>
              <Text style={styles.desc}> {item.description} </Text>
              <Text style={styles.title}> {item.title} </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 350,
    flexDirection: "row",
    padding: 10,
    borderColor: "#F4F4F4",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    marginRight: 10,
  },
  copy: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    height: 130,
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: "100%",
    width: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  desc: {
    color: "#222B45",
    fontSize:15,
    fontWeight:"600"
  },
  title: {},
  text: {
    flexDirection: "column",
  },
});
