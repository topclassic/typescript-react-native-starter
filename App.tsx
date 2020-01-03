import React from "react"
import { Provider } from "mobx-react"
import { initStore } from "@lib/store"
import Route from "./src/route"

function App() {
  const rootStore = initStore()
  return (
    <Provider RootStore={rootStore}>
      <Route />
    </Provider>
  )
}

export default App
