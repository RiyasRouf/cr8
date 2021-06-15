import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import CrCards from "../../components/CrCards/CrCards";
import HscrollView from "../../components/HscrollView/HscrollView";
import SubTitle from "../../components/SubTitle/SubTitle";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const images = [
  { url : require("../../assets/images/one.png") },
  { url : require("../../assets/images/two.png") },
  { url : require("../../assets/images/three.png") },
  { url : require("../../assets/images/four.png") }
];

export default function Discover() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
          <View style={[styles.child, { backgroundColor: 'tomato' }]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.child, { backgroundColor: 'thistle' }]}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={[styles.child, { backgroundColor: 'teal' }]}>
            <Text style={styles.text}>4</Text>
          </View>
        </SwiperFlatList> */}
 
        <SubTitle title="Categories" />
        <CrCards/>
        <SubTitle title="Suitable for you" />
        <HscrollView/>
        <SubTitle title="Suitable for you" />
        <HscrollView/><SubTitle title="Suitable for you" />
        <HscrollView/><SubTitle title="Suitable for you" />
        <HscrollView/>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:100,
    height:100
  }
});
