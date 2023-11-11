import {
   Container,
   HeaderContainer,
   Avatar,
   NameText,
   LoginText,
   HeaderTextContainer,
   FollowsContainer,
   StyledIconFollows,
   NumberText,
   FollowsText,
   HeaderLocationUserContainer,
   LocationText,
   StyledIconLocation,
   HeaderDataUserContainer,
   HeaderIDUserContainer,
   IDText,
   HeaderQuantityRepoContainer,
   QuantityRepoText,
} from "./styles";

export const ProfileDetails = () => {
   return (
      <>
         <Container>
            <HeaderContainer>
               <Avatar
                  source={{
                     uri: "https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/370209615_6846165535446950_4525670178295270660_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=102&_nc_ohc=W-lRm7x89ZUAX9MQYhK&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDPQnllv_Lkv0zlROy_ZFmVqmbl7EhG3htck9oMhoOhxQ&oe=6554EACB&_nc_sid=ee9879",
                  }}
               />
               <HeaderTextContainer>
                  <NameText>Ramon Emanuel Lirani</NameText>
                  <LoginText>Ramonlirani</LoginText>
               </HeaderTextContainer>
            </HeaderContainer>
            <HeaderDataUserContainer>
               <HeaderIDUserContainer>
                  <IDText>
                     ID: <NumberText>317823172</NumberText>
                  </IDText>
               </HeaderIDUserContainer>
               <HeaderLocationUserContainer>
                  <StyledIconLocation name="map-pin" />
                  <LocationText>Paraná</LocationText>
               </HeaderLocationUserContainer>
            </HeaderDataUserContainer>
            <HeaderQuantityRepoContainer>
               <QuantityRepoText>
                  Repositórios públicos: <NumberText>4</NumberText>
               </QuantityRepoText>
            </HeaderQuantityRepoContainer>
            <FollowsContainer>
               <StyledIconFollows name="users" />
               <NumberText>3</NumberText>
               <FollowsText>followers</FollowsText>
               <NumberText>/</NumberText>
               <NumberText>20</NumberText>
               <FollowsText>following</FollowsText>
            </FollowsContainer>
         </Container>
      </>
   );
};
