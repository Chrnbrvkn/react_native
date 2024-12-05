import React from "react";
import { Stack } from "expo-router";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { authStore } from "@/src";

const SignIn = observer(() => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    console.log(login, password);
    authStore.login(login, password);
  };
  return (
    <View style={styles.container}>
      {/* <Stack.Screen options={{ title: "Sign In" }} /> */}
      {/* <Text>Вход</Text> */}
      <View>
        <Text>Логин</Text>
        <TextInput
          style={{ backgroundColor: "rgb(231, 224, 236)", marginTop: 10 }}
          value={login}
          onChangeText={setLogin}
          placeholder="Введите логин"
        />
        <Text>Пароль</Text>
        <TextInput
          style={{ backgroundColor: "rgb(231, 224, 236)", marginTop: 10 }}
          value={password}
          onChangeText={setPassword}
          placeholder="Введите пароль"
          textContentType="password"
        />
      </View>
      <Button onPress={handleSignIn} title="Войти" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export default SignIn;
