import { makeAutoObservable } from "mobx";

class AppStore {
  isLoading: boolean = false;

  theme: 'light' | 'dark' = 'dark';
  constructor() {
    makeAutoObservable(this);
  }

  setTheme(){
    this.theme = this.theme === 'light' ? 'dark' : 'light'
  }
  
  setIsLoading(isLoading: boolean){
    this.isLoading = isLoading;
  }
}

export const appStore = new AppStore();