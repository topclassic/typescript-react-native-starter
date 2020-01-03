import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"

function Detail(props: any) {
  const { navigation } = props
  const { navigate, getParam } = navigation
  const name = getParam("name") || ""

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title={"logout"} onPress={() => navigate("Auth")} />
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

export default Detail
