import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Auth from "@features/auth"

export default function App() {
  return <Auth />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
