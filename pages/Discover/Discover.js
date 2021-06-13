import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Discover() {
  return (
    <View style={styles.container}>
      <Text>Discover Screen !</Text>
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
