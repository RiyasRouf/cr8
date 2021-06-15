import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CrCards from "../../../components/CrCards/CrCards";
import HscrollView from "../../../components/HscrollView/HscrollView";
import SubTitle from "../../../components/SubTitle/SubTitle";
import TopBanner from "../../../components/TopBanner/TopBanner";

export default function Discover() {
  return (
    <ScrollView>

    <View style={styles.container}>
      <TopBanner />
      <SubTitle title="Categories" />
      <CrCards/>
      <SubTitle title="Suitable for you" />
      <HscrollView/>
      <SubTitle title="Popular Courses" />
      <HscrollView/>
      <SubTitle title="Popular Instrucators" />
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
});
