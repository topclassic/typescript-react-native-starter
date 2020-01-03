import React from "react"
import AuthStore from "../store"
import { inject } from "@lib/store"
import { StyleSheet, View, Button } from "react-native"

interface props {
  authStore: AuthStore
  navigation: any
}

function SignIn(props: props) {
  const { authStore, navigation } = props
  const { navigate } = navigation

  return (
    <View style={styles.container}>
      <Button title={"login"} onPress={() => authStore.login(navigate)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default inject("authStore")(SignIn)
