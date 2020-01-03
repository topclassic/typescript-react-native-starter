import React from "react"
import AuthStore from "../store"
import { inject } from "@lib/store"
import { StyleSheet, Text, View, Button } from "react-native"

interface props {
  authStore: AuthStore
  navigation: any
}

function App(props: props) {
  const { authStore, navigation } = props
  const { navigate } = navigation

  return (
    <View style={styles.container}>
      <Button title={"login"} onPress={() => navigate("User")} />
      <Button
        title={"test mobx"}
        onPress={() => authStore.setAuthentication()}
      />

      <Text>{authStore.isAuthentication ? "true" : "false"} </Text>
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

export default inject("authStore")(App)
