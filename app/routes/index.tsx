import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { AppRoutes } from "./app.routes";
import { View } from "react-native";

export function Routes() {
   const { colors } = useTheme();

   return (
      <View style={{ flex: 1, backgroundColor: colors.primary }}>
         <NavigationContainer>
            <AppRoutes />
         </NavigationContainer>
      </View>
   );
}
