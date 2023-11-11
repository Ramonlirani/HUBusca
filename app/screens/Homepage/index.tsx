import { Container } from "./styles";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { UserProps } from "../../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const HomePage = () => {
   const [user, setUser] = useState<UserProps>({
      name: "",
      login: "",
      followers: 0,
      following: 0,
      id: 0,
      location: "",
      avatar_url: "",
      repository_public: 0,
      repository_url: "",
   });
   const [value, setValue] = useState("");

   async function handleAsyncStorage() {
      try {
         await AsyncStorage.setItem("@user_data", user);
         getUserData();
      } catch (error) {
         Alert.alert("Algo deu errado ao salvar as informações");
      }
   }

   async function getUserData() {
      try {
         const res = await AsyncStorage.getItem("@user_data");
         if (res) {
            setValue(res);
         }
      } catch (error) {
         Alert.alert("Algo deu errado tente novamente mais tarde");
      }
   }

   useEffect(() => {
      getUserData();
   }, []);

   return (
      <Container>
         <Header />
         <Input
            handleAsyncStorage={handleAsyncStorage}
            setUser={setUser}
            value={value}
         />
      </Container>
   );
};
