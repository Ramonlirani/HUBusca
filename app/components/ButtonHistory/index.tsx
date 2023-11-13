import { TouchableOpacity } from "react-native";
import { StyledIconBack } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserProps } from "../../types/user";

type StackParamList = {
   Homepage: undefined;
   History: { user: UserProps };
};

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, "Homepage">;

export const ButtonHistory = ({ user }: { user: UserProps }) => {
   const navigation = useNavigation<HomeScreenNavigationProp>();

   const handleHistoryPress = () => {
      navigation.navigate("History", { user });
   };

   return (
      <>
         <TouchableOpacity onPress={handleHistoryPress}>
            <StyledIconBack name="book-open" />
         </TouchableOpacity>
      </>
   );
};
