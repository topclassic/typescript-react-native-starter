import { createStackNavigator } from "react-navigation-stack"
import SignIn from "./screens/signIn"

export default createStackNavigator(
  {
    SignIn: { screen: SignIn }
  },
  {
    initialRouteName: "SignIn"
  }
)
