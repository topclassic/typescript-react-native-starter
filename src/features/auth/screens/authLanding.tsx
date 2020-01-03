import { useEffect } from "react"
import { inject } from "@lib/store"
import AuthStore from "../store"

interface props {
  authStore: AuthStore
  navigation: any
}

const AuthLoading = (props: props) => {
  const { authStore, navigation } = props
  const { getToken } = authStore
  const { navigate } = navigation

  useEffect(() => {
    getToken(navigate)
  }, [])

  return
}

export default inject("authStore")(AuthLoading)
