import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomePage } from "../screens/Homepage";

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
         </Navigator>
      </>
   );
};
