import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CrCards from "../../components/CrCards/CrCards";

export default function Discover() {
  return (
    <View style={styles.container}>
      <CrCards/>
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
