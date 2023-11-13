import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { ProfileUser } from "../ProfileUser";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";

export const Details = () => {
   const [user, setUser] = useState();

   useEffect(() => {
      getUserFromAsyncStorage();
   }, []);

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
   return <>{user ? <ProfileUser user={user} /> : <Loading />}</>;
};
