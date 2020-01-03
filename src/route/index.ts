import { createAppContainer, createSwitchNavigator } from "react-navigation"
import authLoading from "@features/auth/screens/authLoading"
import userRoute from "@features/user/route"
import authRoute from "@features/auth/route"

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: authLoading,
      Auth: authRoute,
      User: userRoute
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
)
