import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomePage } from "../screens/Homepage";
import { History } from "../screens/History";
import { Details } from "../screens/Details";

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
               name="History"
               component={History}
               options={{ headerShown: false }}
            />
            <Screen
               name="Details"
               component={Details}
               options={{ headerShown: false }}
            />
         </Navigator>
      </>
   );
};
