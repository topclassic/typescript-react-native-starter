import { createStackNavigator } from "react-navigation-stack"
import Profile from "./screens/profile"
import Detail from "./screens/detail"

export default createStackNavigator(
  {
    Profile: { screen: Profile },
    Detail: { screen: Detail }
  },
  {
    initialRouteName: "Profile"
  }
)
