import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import { MyStack } from "./app/routes/MyStack";
import theme from "./app/theme";
import { StatusBar } from "react-native";

export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <NavigationContainer>
            <MyStack />
            <StatusBar backgroundColor="transparent" translucent />
         </NavigationContainer>
      </ThemeProvider>
   );
}
