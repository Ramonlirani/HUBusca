import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import theme from "./app/theme";
import { StatusBar } from "react-native";
import { Routes } from "./app/routes";

export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <StatusBar backgroundColor="transparent" translucent />
         <Routes />
      </ThemeProvider>
   );
}
