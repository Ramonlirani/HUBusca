import { TouchableOpacity } from "react-native";
import { StyledIconBack } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type StackParamList = {
   Homepage: undefined;
   History: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, "Homepage">;

export const ButtonHistory = () => {
   const navigation = useNavigation<HomeScreenNavigationProp>();

   const handleHistoryPress = () => {
      navigation.navigate("History");
   };

   return (
      <>
         <TouchableOpacity onPress={handleHistoryPress}>
            <StyledIconBack name="book-open" />
         </TouchableOpacity>
      </>
   );
};
