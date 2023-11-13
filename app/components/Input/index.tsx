import { useState } from "react";
import {
   InputContainer,
   InputSearch,
   StyledIcon,
   IconButton,
   CardContainer,
} from "./styles";
import { Card } from "../Card";
import { UserProps } from "../../types/user";

export default function Input({
   userSearch,
   user,
}: {
   userSearch: (inputValue: string) => void;
   user: UserProps;
}) {
   const [inputValue, setInputValue] = useState("");

   function handleSearchUsers() {
      userSearch(inputValue);
      setInputValue("");
   }

   return (
      <>
         <InputContainer>
            <InputSearch
               placeholder="Buscar"
               placeholderTextColor={"#f5f5f5"}
               value={inputValue}
               onChangeText={(value) => setInputValue(value)}
            ></InputSearch>
            <IconButton onPress={handleSearchUsers}>
               <StyledIcon name="search" />
            </IconButton>
         </InputContainer>
         {user.name !== "" && (
            <CardContainer>
               <Card user={user} />
            </CardContainer>
         )}
      </>
   );
}
