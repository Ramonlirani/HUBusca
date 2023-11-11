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

export default function Card({ user }: { user: UserProps }) {
   return (
      <Container>
         <InfoAvatarNameContainer>
            <Avatar
               source={{
                  uri: "https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/370209615_6846165535446950_4525670178295270660_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=W-lRm7x89ZUAX9MQYhK&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDPQnllv_Lkv0zlROy_ZFmVqmbl7EhG3htck9oMhoOhxQ&oe=6554EACB&_nc_sid=ee9879",
               }}
            />
            <NameText>Ramon Emanuel Lirani</NameText>
         </InfoAvatarNameContainer>
         <InfoLoginLocationContainer>
            <LoginContainer>
               <StyledIconLogin name="user" />
               <LoginText>Ramonlirani</LoginText>
            </LoginContainer>
            <LocationContainer>
               <StyledIconLocation name="map-pin" />
               <LocationText>Paraná</LocationText>
            </LocationContainer>
         </InfoLoginLocationContainer>
      </Container>
   );
}
