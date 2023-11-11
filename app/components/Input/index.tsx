import { useState } from "react";
import { Container, InputSearch, StyledIcon, IconButton } from "./styles";

export default function Input() {
   const [inputValue, setInputValue] = useState("");

   return (
      <Container>
         <InputSearch
            placeholder="Buscar"
            placeholderTextColor={"#f5f5f5"}
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
         ></InputSearch>
         <IconButton>
            <StyledIcon name="search" />
         </IconButton>
      </Container>
   );
}
