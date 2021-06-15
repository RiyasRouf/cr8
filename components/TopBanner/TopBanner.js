import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const TopBanner = () => {
  const [text, onChangeText] = React.useState("Search...");

  const data = [
    {
      id: "1",
      imgUrl: require("../../App/assets/images/Ballet-Dance-201806-001.jpg"),
      text: "Basic Ballet Course",
      description: "test description for the item",
    },
    {
      id: "2",
      imgUrl: require("../../App/assets/images/Ballet-5672.jpg"),
      text: "Basic Ballet Course",
      description: "test description for the item",
    },
    {
      id: "3",
      imgUrl: require("../../App/assets/images/Ballet-14325.jpg"),
      text: "Basic Ballet Course",
      description: "test description for the item",
    },
  ];

  return (
    <View style={styles.container}>
       <View style={styles.searchInput}>
       <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
       </View>
      <SwiperFlatList
        autoplay
        autoplayLoop
        autoplayDelay={5}
        index={0}
        showPagination={false}
        style={styles.swiper}
      >
        {data.map((item, index) => (
          <ImageBackground
            key={index}
            source={item.imgUrl}
            style={styles.image}
          >
            <View style={styles.child}>
              <View>
                <Text style={styles.subtext}>Highlight Courses</Text>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.tutorName}>Mrs. Leile Evans</Text>
              </View>
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
  searchInput: {
    height: 40,
    borderWidth: 1,
    marginTop:50,
    marginLeft:20,
    backgroundColor:"transparent",
    color:"#fff",
    zIndex:9999,
    width:"80%",
    position: "absolute",
    borderWidth:0
  },
  input:{
    backgroundColor:"#222B458C",
    color:"#8F9BB3",
    height:50,
    borderWidth:0,
    borderRadius:10,
    padding:10
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  swiper: {},
  child: {
    width,
    minHeight: 536,
    padding: 10,
    justifyContent: "flex-end",
  },
  subtext: {
    color: "#fff",
  },
  text: {
    fontSize: 50,
    color: "#FFF",
  },
  tutorName: {
    color: "#FFF",
  },
  image: {
    width,
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    resizeMode: "stretch",
    justifyContent: "space-between",
  },
});
