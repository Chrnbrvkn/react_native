import { authStore } from "@/src";
import { router } from "expo-router";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

const Index = observer(() => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(authStore.isValid){
      router.replace("/(tabs)");
    }
  }, []);
  
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

export default Index;

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