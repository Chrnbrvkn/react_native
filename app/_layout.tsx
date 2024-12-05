import { appStore, authStore } from "@/src";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ActivityIndicator, View } from "react-native";

const RootLayout = observer(() => {

  useEffect(() => {
    const initializeAuth = async () => {
      await authStore.checkToken();
  
    };
    initializeAuth();
  }, []);

  if (appStore.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {authStore.isValid ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <Stack.Screen name="sign-in" />
      )}
    </Stack>
  );
});

export default RootLayout;
