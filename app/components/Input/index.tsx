import { useState } from "react";
import {
   InputContainer,
   InputSearch,
   StyledIcon,
   IconButton,
   CardContainer,
} from "./styles";
import { GestureResponderEvent } from "react-native";
import Card from "../Card";

interface InputProps {
   handleAsyncStorage: (event: GestureResponderEvent) => void;
}

export default function Input({ handleAsyncStorage }: InputProps) {
   const [inputValue, setInputValue] = useState("");

   return (
      <>
         <InputContainer>
            <InputSearch
               placeholder="Buscar"
               placeholderTextColor={"#f5f5f5"}
               value={inputValue}
               onChangeText={(value) => setInputValue(value)}
            ></InputSearch>
            <IconButton onPress={handleAsyncStorage}>
               <StyledIcon name="search" />
            </IconButton>
         </InputContainer>
         <CardContainer>
            <Card />
         </CardContainer>
      </>
   );
}
