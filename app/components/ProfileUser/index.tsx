import { useEffect, useState } from "react";
import { UserProps } from "../../types/user";
import { ButtonBack } from "../ButtonBack";
import { CardRepository } from "../CardRepository";

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
   ContainerButtons,
} from "./styles";
import axios from "axios";
import { Loading } from "../Loading";
import { ButtonHistory } from "../ButtonHistory";

export const ProfileUser = ({ user }: { user: UserProps }) => {
   const [repositoryList, setRepositoryList] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchRepositoryData = async () => {
         try {
            const response = await axios.get(user.repository_url);
            setRepositoryList(response.data);
            setLoading(false);
         } catch (error) {
            console.error("Erro ao obter dados dos repositórios:", error);
            setLoading(false);
         }
      };

      fetchRepositoryData();
   }, [user.repository_url]);

   if (loading) {
      return <Loading />;
   }

   return (
      <>
         <Container>
            <ContainerButtons>
               <ButtonBack />
               <ButtonHistory user={user} />
            </ContainerButtons>
            <HeaderContainer>
               <Avatar
                  source={{
                     uri: user.avatar_url,
                  }}
               />
               <HeaderTextContainer>
                  <NameText>{user.name}</NameText>
                  <LoginText>{user.login}</LoginText>
               </HeaderTextContainer>
            </HeaderContainer>
            <HeaderDataUserContainer>
               <HeaderIDUserContainer>
                  <IDText>
                     ID: <NumberText>{user.id}</NumberText>
                  </IDText>
               </HeaderIDUserContainer>

               <HeaderLocationUserContainer>
                  <StyledIconLocation name="map-pin" />
                  <LocationText>
                     {user.location ? user.location : "N/A"}
                  </LocationText>
               </HeaderLocationUserContainer>
            </HeaderDataUserContainer>
            <HeaderQuantityRepoContainer>
               <QuantityRepoText>
                  Public repository:
                  <NumberText>{user.repository_public}</NumberText>
               </QuantityRepoText>
            </HeaderQuantityRepoContainer>
            <FollowsContainer>
               <StyledIconFollows name="users" />
               <NumberText>{user.followers}</NumberText>
               <FollowsText>followers</FollowsText>
               <NumberText>/</NumberText>
               <NumberText>{user.following}</NumberText>
               <FollowsText>following</FollowsText>
            </FollowsContainer>
            <CardRepository repositoryList={repositoryList} />
         </Container>
      </>
   );
};
