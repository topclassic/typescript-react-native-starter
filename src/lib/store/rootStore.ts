import { configure } from "mobx"

import AuthStore from "@features/auth/store"

configure({ enforceActions: "observed" })

export default class RootStore {
  authStore: AuthStore

  constructor() {
    this.authStore = new AuthStore(this)
  }
}
