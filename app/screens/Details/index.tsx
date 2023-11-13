import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { ProfileUser } from "../../components/ProfileUser";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Container } from "./styles";

export const Details = ({ route }: any) => {
   const [user, setUser] = useState();

   useEffect(() => {
      if (route.params && route.params.user) {
         setUser(route.params.user);
      } else {
         getUserFromAsyncStorage();
      }
   }, [route.params]);

   const { getItem } = useAsyncStorage("@user_data");

   const getUserFromAsyncStorage = async () => {
      try {
         const json = await getItem();
         if (json !== null) {
            const user = JSON.parse(json);
            setUser(user);
         }
      } catch (error) {
         console.error("Erro ao buscar os dados do LocalStorage", error);
      }
   };

   return (
      <Container>{user ? <ProfileUser user={user} /> : <Loading />}</Container>
   );
};
