import {
   Title,
   Container,
   ContainerButtons,
   EmptyContainer,
   EmptyText,
} from "./styles";
import { ButtonDelete } from "../ButtonDelete";
import { ButtonBack } from "../ButtonBack";
import { UserProps } from "../../types/user";
import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native";
import { Card } from "../Card";

export function HistoryList() {
   const [userHistory, setUserHistory] = useState<UserProps[]>([]);

   useEffect(() => {
      getUserHistory();
   }, []);

   const { getItem } = useAsyncStorage("@user_history");
   const { removeItem } = useAsyncStorage("@user_history");

   const getUserHistory = async () => {
      try {
         const json = await getItem();
         if (json !== null) {
            const userDataHistory = JSON.parse(json);
            setUserHistory(userDataHistory);
         }
      } catch (error) {
         console.error("Error fetching user history from AsyncStorage:", error);
      }
   };

   const handleClearHistory = async () => {
      try {
         await removeItem();
         setUserHistory([]);
      } catch (error) {
         console.error("Error clearing user history from AsyncStorage:", error);
      }
   };

   return (
      <>
         <ContainerButtons>
            <ButtonBack />
            <ButtonDelete handleClearHistory={handleClearHistory} />
         </ContainerButtons>
         <Title>Search history</Title>
         <Container>
            <FlatList
               data={userHistory}
               showsVerticalScrollIndicator={true}
               keyExtractor={(item) => item.id.toString()}
               ListEmptyComponent={() => (
                  <EmptyContainer>
                     <EmptyText>Lista está vazia</EmptyText>
                  </EmptyContainer>
               )}
               contentContainerStyle={{
                  padding: 10,
               }}
               renderItem={({ item }) => <Card user={item} />}
            />
         </Container>
      </>
   );
}
