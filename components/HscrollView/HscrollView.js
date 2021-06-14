import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function HscrollView() {
  const datas = {
    names: [
      {
        id: "1",
        imgUrl: require("../../assets/images/st-george-flag-std_2.jpg"),
        title: "Fitness",
        description: "3000 Most Popular English Vocabulary",
      },
      {
        id: "2",
        imgUrl: require("../../assets/images/learn-english.jpg"),
        title: "Learning",
        description: "test description for the item",
      },
      {
        id: "3",
        imgUrl: require("../../assets/images/cooking.jpg"),
        title: "Cooking",
        description: "test description for the item",
      },
    ],
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {datas.names.map((item, index) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.imgUrl} style={styles.image} />
            <View>
              <Text> {item.description} </Text>
              <Text> {item.title} </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 400,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderColor: "#F4F4F4",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
  },
  container: {
    height: 180,
    borderRadius: 10,
  },
  image: {
    margin: 15,
    height: 130,
    width: 120,
    borderRadius: 10,
  },
  text: {
    flexDirection: "column",
    //    justifyContent: 'space-between',
    //    alignItems: 'center',
  },
});
