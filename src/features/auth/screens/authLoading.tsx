import React, { useEffect } from "react"
import { inject } from "@lib/store"
import { StatusBar, ActivityIndicator, View } from "react-native"
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

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
}

export default inject("authStore")(AuthLoading)
