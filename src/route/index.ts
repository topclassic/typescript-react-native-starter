import { createAppContainer, createSwitchNavigator } from "react-navigation"
import authLanding from "@features/auth/screens/authLanding"
import userRoute from "@features/user/route"
import authRoute from "@features/auth/route"

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLanding: authLanding,
      Auth: authRoute,
      User: userRoute
    },
    {
      initialRouteName: "AuthLanding"
    }
  )
)
