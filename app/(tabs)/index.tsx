import React, { useEffect } from "react";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { StyleSheet, View, Text, Button } from "react-native";
import { authStore } from "@/src";

const HomeScreen = observer(() => {

  return (
    <View style={styles.container}>
      <Text style={{marginTop: '30%'}}>Home Screen</Text>
      <View>
        <Button title="logout" onPress={() => router.replace("/sign-in")} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

export default HomeScreen;
