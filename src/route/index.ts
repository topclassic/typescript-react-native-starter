import { createAppContainer, createSwitchNavigator } from "react-navigation"
import userRoute from 'features/user/route'
import authRoute from 'features/auth/route'

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: authRoute,
      User: userRoute
    },
    {
      initialRouteName: "Auth"
    }
  )
)
