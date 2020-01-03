import React from "react"
import { inject } from "@lib/store"
import { StyleSheet, Button, Text, View } from "react-native"

function Detail(props: any) {
  const { navigation, userStore } = props
  const { navigate, getParam } = navigation
  const name = getParam("name") || ""
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button
        title={"logout"}
        onPress={() => userStore.authStore.logout(navigate)}
      />
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

export default inject("userStore")(Detail)
