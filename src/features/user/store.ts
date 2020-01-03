export default class UserStore {
  authStore: any
  constructor(rootStore: any) {
    this.authStore = rootStore.authStore
  }
}
