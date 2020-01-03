import { observable, action } from "mobx"
import RootStore from "@lib/store/rootStore"

export default class AuthStore {
  rootStore: any

  @observable
  isAuthentication = false

  constructor(rootStore: any) {}

  @action
  setAuthentication() {
    this.isAuthentication = !this.isAuthentication
  }
}
