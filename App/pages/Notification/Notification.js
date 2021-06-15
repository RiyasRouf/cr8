import React from "react";
import { Image } from "react-native";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Belle Schultz",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/learn-english.jpg"),
    timeStamp: "11 mins",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Jack Sparrow",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/four.png"),
    timeStamp: "5 days ago",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2972",
    title: "Jhon Deo",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/one.png"),
    timeStamp: "11 June 2021",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad5abb28ba",
    title: "Belle Schultz",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/image1.png"),
    timeStamp: "5 days ago",
  },
  {
    id: "3ac68afc-c605-48d-a4f8-fbd91aa7f63",
    title: "Jack Sparrow",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/three.png"),
    timeStamp: "11 June 2020",
  },
  {
    id: "58694a0f-3a1-471f-bd96-14557129d72",
    title: "Jhon Deo",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/two.png"),
    timeStamp: "5 days ago",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3d53abb28ba",
    title: "It's been 5 days we don't meet, let's study with us.",
    desc: "",
    imgUrl: require("../../assets/images/three.png"),
    timeStamp: "11 June 2020",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd9aa97f63",
    title: "Belle Schultz",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/two.png"),
    timeStamp: "5 days ago",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557146e2d72",
    title: "Jhon Deo",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/image1.png"),
    timeStamp: "11 June 2020",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3d53567abb28ba",
    title: "Belle Schultz",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/two.png"),
    timeStamp: "5 days ago",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd9567aa97f63",
    title: "Jack Sparrow",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/image1.png"),
    timeStamp: "5 days ago",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e4562d72",
    title: "Jhon Deo",
    desc: "have a new course. Let check that now!",
    imgUrl: require("../../assets/images/two.png"),
    timeStamp: "5 days ago",
  },
];

const Item = ({ title, imgUrl, desc, timeStamp }) => (
  <View style={styles.item}>
    <Image source={imgUrl} style={styles.img} />
    <View style={styles.copy}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
    <Text style={styles.timeStamp}>{timeStamp}</Text>
  </View>
);

export default function Notification() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      imgUrl={item.imgUrl}
      desc={item.desc}
      timeStamp={item.timeStamp}
    />
  );

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.notifyItem}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
  },
  title: {
    color: "#222B45",
    fontWeight: "bold",
    paddingRight: 2,
  },
  timeStamp: {
    position: "absolute",
    right: 10,
    bottom: 8,
    color: "#C5CEE0",
  },
  desc: {
    color: "#8F9BB3",
  },
  copy: {
    width: "65%",
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 10,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
