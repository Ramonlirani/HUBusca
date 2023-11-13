import { TouchableOpacity } from "react-native";
import { StyledIconBack } from "./styles";

interface ButtonDeleteProps {
   handleClearHistory: () => Promise<void>;
}

export const ButtonDelete = ({ handleClearHistory }: ButtonDeleteProps) => {
   return (
      <>
         <TouchableOpacity onPress={handleClearHistory}>
            <StyledIconBack name="trash-2" />
         </TouchableOpacity>
      </>
   );
};
