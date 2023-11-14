import { FlatList, Linking } from "react-native";
import {
   CardContainer,
   DescriptionText,
   NameText,
   DataRepoContainer,
   TittleText,
   PublicText,
   HeaderText,
   CircleColorTech,
   TechText,
   CreateAtText,
   DataCreateAtText,
   CreateAtContainer,
   TechContainer,
   LastCommitText,
   DataLastCommitText,
   LastCommitContainer,
   TouchableOpacityContainer,
   EmptyText,
   EmptyContainer,
   StyledIconEmpty,
} from "./styles";
import { formatDate } from "../DateFormatter";
import { getColorForLanguage } from "../../theme";

interface Repository {
   id: number;
   name: string;
   html_url: string;
   description: string;
   language: string;
   created_at: string;
   pushed_at: string;
}

interface CardRepositoryProps {
   repositoryList: Repository[];
}

export const CardRepository = ({ repositoryList }: CardRepositoryProps) => {
   const handlePress = (url: string) => {
      Linking.openURL(url);
   };

   return (
      <>
         <TittleText>Popular repositories</TittleText>
         {repositoryList.length > 0 ? (
            <FlatList
               data={repositoryList}
               showsVerticalScrollIndicator={true}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => (
                  <TouchableOpacityContainer
                     onPress={() => handlePress(item.html_url)}
                  >
                     <CardContainer>
                        <HeaderText>
                           <NameText>{item.name}</NameText>
                           <PublicText>Public</PublicText>
                        </HeaderText>
                        <DescriptionText>{item.description}</DescriptionText>
                        <DataRepoContainer>
                           <TechContainer>
                              <CircleColorTech
                                 style={{
                                    backgroundColor: getColorForLanguage(
                                       item.language
                                    ),
                                 }}
                              />
                              <TechText>{item.language}</TechText>
                           </TechContainer>
                           <CreateAtContainer>
                              <CreateAtText>CreateAt:</CreateAtText>
                              <DataCreateAtText>
                                 {formatDate(item.created_at)}
                              </DataCreateAtText>
                           </CreateAtContainer>
                        </DataRepoContainer>
                        <LastCommitContainer>
                           <LastCommitText>Last Commit:</LastCommitText>
                           <DataLastCommitText>
                              {formatDate(item.pushed_at)}
                           </DataLastCommitText>
                        </LastCommitContainer>
                     </CardContainer>
                  </TouchableOpacityContainer>
               )}
            />
         ) : (
            <EmptyContainer>
               <EmptyText>Public repositories empty</EmptyText>
               <StyledIconEmpty name="frown" />
            </EmptyContainer>
         )}
      </>
   );
};
