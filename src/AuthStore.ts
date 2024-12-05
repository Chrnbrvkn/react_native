// import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { makeAutoObservable } from "mobx";
import { appStore } from "./AppStore";

class AuthStore {
  token: string | null = null;
  isValid: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(login: string, password: string) {
    try {
      appStore.setIsLoading(true);
      const token = "token";
      console.log("LOGIN");
      console.log(login, password);

      // await useAsyncStorage("token").setItem(token);
      this.isValid = true;
      // setTimeout(() => {}, 2000);
      router.replace("/(tabs)");
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
    } finally {
      appStore.setIsLoading(false);
    }
  }

  async logout() {
    try {
      appStore.setIsLoading(true);
      // await useAsyncStorage("token").removeItem();
      this.isValid = false;
      setTimeout(() => {}, 2000);
      router.replace("/sign-in");
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
    } finally {
      appStore.setIsLoading(false);
    }
  }

  async checkToken() {
    try {
      appStore.setIsLoading(true);
      // this.isValid = true;
      
      // await useAsyncStorage("token").removeItem();
      // this.isValid = !!this.token;
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
    } finally {
      appStore.setIsLoading(false);
    }
  }
}

export const authStore = new AuthStore();
