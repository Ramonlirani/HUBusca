import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomePage } from "../screens/Homepage";
import { Profile } from "../screens/Profile";
import { History } from "../screens/History";

const { Navigator, Screen } = createNativeStackNavigator();

export const MyStack = () => {
   return (
      <>
         <Navigator>
            <Screen
               name="Homepage"
               component={HomePage}
               options={{ headerShown: false }}
            />
            <Screen
               name="Profile"
               component={Profile}
               options={{ headerShown: false }}
            />
            <Screen
               name="History"
               component={History}
               options={{ headerShown: false }}
            />
         </Navigator>
      </>
   );
};
