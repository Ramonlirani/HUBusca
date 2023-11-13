import { UserProps } from "../../types/user";
import {
   Container,
   Avatar,
   InfoAvatarNameContainer,
   NameText,
   InfoLoginLocationContainer,
   LoginText,
   StyledIconLocation,
   StyledIconLogin,
   LocationText,
   LoginContainer,
   LocationContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type StackParamList = {
   Homepage: undefined;
   Profile: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, "Homepage">;

export const Card = ({ user }: { user: UserProps }) => {
   const navigation = useNavigation<HomeScreenNavigationProp>();

   const handleAvatarPress = () => {
      navigation.navigate("Profile");
   };

   return (
      <Container>
         <InfoAvatarNameContainer>
            <TouchableOpacity onPress={handleAvatarPress}>
               <Avatar
                  source={{
                     uri: user.avatar_url,
                  }}
               />
            </TouchableOpacity>
            <NameText>{user.name}</NameText>
         </InfoAvatarNameContainer>
         <InfoLoginLocationContainer>
            <LoginContainer>
               <StyledIconLogin name="user" />
               <LoginText>{user.login}</LoginText>
            </LoginContainer>
            <LocationContainer>
               <StyledIconLocation name="map-pin" />
               <LocationText>
                  {user.location ? user.location : "N/A"}
               </LocationText>
            </LocationContainer>
         </InfoLoginLocationContainer>
      </Container>
   );
};
