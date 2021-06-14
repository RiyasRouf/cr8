import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CrCards from "../../components/CrCards/CrCards";
import HscrollView from "../../components/HscrollView/HscrollView";
import SubTitle from "../../components/SubTitle/SubTitle";

export default function Discover() {
  return (
    <View style={styles.container}>
      <SubTitle title="Categories" />
      <CrCards/>
      <SubTitle title="Suitable for you" />
      <HscrollView/>
    </View>
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
