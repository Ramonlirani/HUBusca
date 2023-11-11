import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { HomePage } from "../screens/Homepage";
import { ProfileDetails } from "../screens/ProfileDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export const MyStack = () => {
   return (
      <>
         <Navigator>
            {/* <Screen
               name="Homepage"
               component={HomePage}
               options={{ headerShown: false }}
            /> */}
            <Screen
               name="ProfileDetails"
               component={ProfileDetails}
               options={{ headerShown: false }}
            />
         </Navigator>
      </>
   );
};
