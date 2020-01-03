import { flowRight as compose } from "lodash"
import { inject as injectStore, observer } from "mobx-react"
import RootStore from "./rootStore"

let store = null

export function initStore() {
  if (store === null) {
    store = new RootStore()
  }
  return store
}

export function inject(subStore: string, { observe = true } = {}) {
  const hocs = [
    injectStore(({ RootStore }) => {
      if (!subStore) {
        return { RootStore: RootStore }
      }
      return { [subStore]: RootStore[subStore] }
    })
  ]
  const ob: any = observer
  if (observe) {
    hocs.push(ob)
  }

  return compose(...hocs)
}
