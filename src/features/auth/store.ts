import { observable, action, computed } from "mobx"
import { AsyncStorage } from "react-native"

export default class AuthStore {
  constructor(rootStore: any) {}

  @observable token = null

  @action login(navigate: (path: string) => {}) {
    const token = "success"
    this.token = token
    AsyncStorage.setItem("token", token)
    navigate("Profile")
  }

  @action logout(navigate: (path: string) => {}) {
    this.token = null
    AsyncStorage.removeItem("token")
    navigate("Auth")
  }

  @action async getToken(navigate: (path: string) => {}) {
    const token = await AsyncStorage.getItem("token")
    this.token = token
    navigate(token ? "User" : "Auth")
  }
}
