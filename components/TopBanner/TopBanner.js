import React from "react";
import { StyleSheet, Dimensions, View, Text, ImageBackground } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const TopBanner = () => {
  const data = [
    {
      id: "1",
      imgUrl: require("../../assets/images/fitness.jpg"),
      title: "Fitness",
      description: "test description for the item",
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
  ];

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={5}
        autoplayLoop
        index={2}
        showPagination={false}
        style={styles.swiper}
      >
        {data.map((item, index) => (
          <ImageBackground
            source={item.imgUrl}
            style={{ width: 330, height: "100%" }}
          >
            <View style={styles.child}>
            <Text>Inside</Text>
              <Text style={styles.subtext}>Highlight Courses</Text>
              <Text style={styles.text}>Basic Ballet Cousers</Text>
              <Text style={styles.tutorName}>Mrs. Leile Evans</Text>
            </View>
          </ImageBackground>
        ))}
      </SwiperFlatList>
    </View>
  );
};

export default TopBanner;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: {
    width,
    minHeight: 500,
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: 50,
    textAlign: "center",
  },
});
