import React from "react"
import { Button } from "react-native"

function Profile(props: any) {
  const { navigation } = props
  const { navigate } = navigation
  return (
    <Button
      title="Go to Top's profile detail"
      onPress={() => navigate("Detail", { name: "Top" })}
    />
  )
}

export default Profile
