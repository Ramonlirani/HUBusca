import { TouchableOpacity } from "react-native";
import { StyledIconBack } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const ButtonBack = () => {
   const navigation = useNavigation();

   return (
      <>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <StyledIconBack name="arrow-left" />
         </TouchableOpacity>
      </>
   );
};
