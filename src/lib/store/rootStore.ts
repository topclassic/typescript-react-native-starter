import { configure } from "mobx"

import AuthStore from "@features/auth/store"
import UserStore from "@features/user/store"

configure({ enforceActions: "observed" })

export default class RootStore {
  authStore: AuthStore
  userStore: UserStore

  constructor() {
    this.authStore = new AuthStore(this)
    this.userStore = new UserStore(this)
  }
}
